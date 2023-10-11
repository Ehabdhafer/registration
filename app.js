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

  function validateUsername(name) {
    return /^\S+$/.test(name);
  }

  function validatePassword(pass) {
    return /^(?=.\d)(?=.[A-Z])(?=.*\W).{8,}$/.test(pass);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^07\d{8}$/.test(phone);
  }

  if (!validateUsername(name)) {
    alert("name must not contain spaces");
    return;
  }

  if (!validatePassword(pass)) {
    alert(
      "Invalid password. It must be at least 8 characters have atlest 1 uppercase and 1 special character"
    );
    return;
  }

  if (!validateEmail(email)) {
    alert("wrong email format ");
    return;
  }

  if (!validatePhone(phone)) {
    alert("phone number must start with 07 and have 10 digits");
    return;
  }
});

// -----------------------------------------------------------------
