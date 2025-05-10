const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin SDK with your service account credentials
const serviceAccount = require('../../firebase-service-account.json'); // <-- update path if needed
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'prill-web.appspot.com' // <-- your actual bucket name from Firebase Console
});

const bucket = admin.storage().bucket();

// Example: When saving a submission
function saveSubmission(name, surname, anon, files) {
  // Use Firebase Storage to store files
  const submissionFolder = `story_${name}_${surname}_${anon}_${anon}`;

  files.forEach((file, index) => {
    const fileName = `file_${index}_${file.originalname}`;
    // Use forward slashes for Firebase Storage paths
    const filePath = `${submissionFolder}/${fileName}`;

    // Upload the file to Firebase Storage
    const fileUpload = bucket.file(filePath);

    // Pipe the file buffer directly to Firebase Storage
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    stream.on('error', (err) => {
      console.error('Error uploading file:', err);
    });

    stream.on('finish', () => {
      console.log(`File uploaded successfully: ${fileName}`);
    });

    stream.end(file.buffer); // Upload the file buffer to Firebase Storage
  });
}

module.exports = { saveSubmission };
