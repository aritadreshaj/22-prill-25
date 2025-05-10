const admin = require('firebase-admin');
const path = require('path');

// 1. Place your Firebase service account JSON file in a secure location, e.g.:
//    d:\important documents and files\website\22-prill-25\firebase-service-account.json
// 2. Update the require path below to match your actual file location:
const serviceAccount = require('../../firebase-service-account.json'); // <-- update path if n
// eeded

// How to find your Firebase Storage bucket name:
// 1. Go to https://console.firebase.google.com/
// 2. Select your project.
// 3. In the left menu, click "Build" > "Storage".
// 4. At the top of the Storage page, you will see something like:
//    gs://your-project-id.appspot.com
// 5. Your bucket name is: your-project-id.appspot.com
// 6. Replace 'your-bucket-name.appspot.com' in your code with this value.

// Example:
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'prill-web.appspot.com' // <-- your actual bucket name from Firebase Console
});

const bucket = admin.storage().bucket();

// In the Firebase Console > Storage, the "Upload a file" option is for manually uploading files to your storage bucket.
// You do NOT need to upload anything manually for your backend to work.
// Your backend code will upload files automatically when users submit stories.

// Only use "Upload a file" in the Firebase Console if you want to manually add files for testing or other purposes.

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

// ✅ You are ready to test file uploads!
// 1. Make sure your Firebase Storage rules allow read/write for testing.
// 2. Deploy your backend.
// 3. Submit a story from your web or phone client.
// 4. Check Firebase Console > Storage to see if files appear in the correct folder.

// If you see files in your Firebase Storage after submitting, everything is working!
// If you get errors, copy the error message here for help.

// Example API route handler (for reference, not exported)
async function handleApiRequest(req, res) {
  // ...parse form data and files using multer or busboy...
  // Example: const { name, surname, anon } = req.body; const files = req.files;
  try {
    saveSubmission(name, surname, anon, files);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload files.' });
  }
}

// Firebase Storage Rules (for testing, set to public, but restrict for production):
/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true; // <-- for testing only!
    }
  }
}
*/
// For production, restrict write/read to authenticated users or specific conditions.

module.exports = { saveSubmission };
