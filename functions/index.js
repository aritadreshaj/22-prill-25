const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Cloud Function to handle form submission
exports.submitForm = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST requests are allowed.");
  }

  // Get data from the request body (this should be the form data)
  const data = req.body;

  try {
    // Save the data to Firestore
    const docRef = await admin.firestore().collection("submissions").add(data);
    return res.status(200).send(`Form submitted successfully! Document ID: ${docRef.id}`);
  } catch (error) {
    return res.status(500).send(`Error saving data: ${error.message}`);
  }
});
