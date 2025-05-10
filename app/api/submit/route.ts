import { NextRequest } from "next/server";
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";
import UndiciFile from "undici";
import admin from "firebase-admin";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = (email: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Faleminderit që ndatë historinë tuaj!",
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: 'Poppins', sans-serif;
            }
          </style>
        </head>
        <body>
          <p><strong>I/e nderuar,</strong></p>
          <p>Faleminderit për kohën dhe gatishmërinë për të ndarë historinë tuaj. Ajo tashmë është ruajtur dhe do të bëhet pjesë e një narrative që do të jetojë, duke siguruar që kujtimet dhe përvojat që ndatë të mos harrohen kurrë.</p>
          <br>
          <p>Me respekt,</p>
          <p>Arita Dreshaj</p>
          <p><a href="https://www.aritadreshaj.com/">www.aritadreshaj.com</a></p>
        </body>
      </html>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// Initialize Firebase Admin only once
if (!admin.apps.length) {
  const serviceAccount = require("../../../firebase-service-account.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "prill-web.appspot.com", // <-- your bucket name
  });
}
const bucket = admin.storage().bucket();

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.startsWith("multipart/form-data")) {
      return new Response(JSON.stringify({ error: "Invalid content type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const formData = await req.formData();
    const NodeFile = globalThis.File || UndiciFile;

    let textContent = "";
    const files: { file: File; filename: string }[] = [];
    let userEmail = "";
    let userName = "";
    let userSurname = "";
    let userBirthday = "";

    for (const [key, value] of formData.entries()) {
      if (
        value &&
        typeof (value as any).arrayBuffer === "function" &&
        typeof (value as any).name === "string" &&
        typeof (value as any).size === "number" &&
        (value as any).size > 0
      ) {
        const timestamp = Date.now();
        const uniqueName = `${key}_${timestamp}_${(value as any).name}`;
        files.push({ file: value as File, filename: uniqueName });
      } else if (typeof value === "string") {
        textContent += `${key}: ${value}\n`;
        if (key === "email") userEmail = value;
        if (key === "emri") userName = value;
        if (key === "mbiemri") userSurname = value;
        if (key === "ditelindja") userBirthday = value;
      }
    }

    if (!textContent && files.length === 0) {
      return new Response(JSON.stringify({ error: "No data received" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Sanitize for folder name
    const safe = (str: string) =>
      (str || "anon").toLowerCase().replace(/[^a-z0-9]/gi, "_");
    const folderName = `story_${safe(userName)}_${safe(userSurname)}_${safe(userBirthday)}`;

    // --- Upload text content to Firebase Storage ---
    const textFile = bucket.file(`${folderName}/text.txt`);
    await textFile.save(textContent, { contentType: "text/plain" });

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    for (const { file, filename } of files) {
      if ((file as any).size > MAX_FILE_SIZE) {
        return new Response(JSON.stringify({ error: "File size too large" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      const arrayBuffer = await file.arrayBuffer();
      const uploadFile = bucket.file(`${folderName}/${filename}`);
      await uploadFile.save(Buffer.from(arrayBuffer), {
        contentType: (file as any).type || "application/octet-stream",
      });
    }

    if (userEmail) {
      await sendConfirmationEmail(userEmail);
    }

    return new Response(JSON.stringify({ success: true, folder: folderName }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error handling form submission:", error);
    return new Response(JSON.stringify({ error: error?.message || "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
