const firebaseConfig = {
  apiKey: "AIzaSyB5osuWCQjhvE32ZQlb8jM4QBji7BNW7v8",
  authDomain: "registration-4887a.firebaseapp.com",
  databaseURL: "https://registration-4887a-default-rtdb.firebaseio.com",
  projectId: "registration-4887a",
  storageBucket: "registration-4887a.appspot.com",
  messagingSenderId: "519143433571",
  appId: "1:519143433571:web:0a3ebdfb1ac261d252df56",
  measurementId: "G-G14GBR8MSF",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const phoneNumber = document.getElementById("phone").value;
  const username = document.getElementById("name").value;

  // Create user with email and password
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      // Save user data to Firestore
      return db.collection("users").doc(email).set({
        username: username,
        email: email,
        phoneNumber: phoneNumber,
      });
    })
    .then(() => {
      console.log("User data saved to Firestore successfully.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`${errorCode}: ${errorMessage}`);
    });
});

// -----------------------------------------------------------------

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// ------------------------------------------------------------------------
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const database = firebase.database()

// function register(){
//   email = document.getElementById("email").value
//   pass = document.getElementById("pass").value
//   name = document.getElementById("name").value
//   phone = document.getElementById("phone").value
// }

// auth.createUserWithEmailAndPassword(email, pass)
// .then(function(){
//   var user = auth.currentUser
//   var database_ref = database.ref()
//   var user_data = {
//     email : email,
//     pass : pass,
//     name : name,
//     phone : phone
//     last_login : Date.now()
//   }

// })

// const db = firebase.firestore();
// const docRef = db.collection("users").doc();
// docRef.set({
//   username: req.body.name,
//   password: req.body.pass,
//   email: req.body.email,
//   phone: req.body.phone,
// });
// docRef.save();

// const express = require("express");
// const expressFirebase = require("express-firebase");
// expressFirebase.initializeApp(app, firebaseConfig);

// app.post("/submit-form", async (req, res) => {
//   const userRef = expressFirebase.firestore().collection("users").doc();
//   await userRef.set({
//     name: req.body.name,
//     pass: req.body.pass,
//     email: req.body.email,
//     phone: req.body.phone,
//   });

//   res.send("Account created successfully!");
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
// ---------------------------------------------------------------------
// var database = firebase.database();

// function save() {
//   var name = document.getElementById("name").value;
//   var pass = document.getElementById("pass").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;

//   database.ref("users/" + name).set({
//     name: name,
//     pass: pass,
//     email: email,
//     phone: phone,
//   });
//   alert("saved");
// }

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// const validationRules = {
//   name: {
//     pattern: /^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]$/,
//     minLength: 3,
//   },
// };

// // Get the values of the input fields that you want to validate.
// const nameInput = document.querySelector("#name");

// // Apply your validation rules to the input field values.
// if (!validationRules.name.pattern.test(nameInput.value)) {
//   // Display an error message to the user.
//   alert("Please enter a valid name.");
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   // Validate the form input.
//   const isValid = validateForm();

//   // If the input is invalid, prevent the form from submitting.
//   if (!isValid) {
//     event.preventDefault();
//   }
// });
