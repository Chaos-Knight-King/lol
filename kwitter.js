
var firebaseConfig = {
    apiKey: "AIzaSyAcW7K2671tzu-YUgKuXH1bubs1T4uS0Z4",
    authDomain: "project-dec38.firebaseapp.com",
    databaseURL: "https://project-dec38-default-rtdb.firebaseio.com",
    projectId: "project-dec38",
    storageBucket: "project-dec38.appspot.com",
    messagingSenderId: "506200422560",
    appId: "1:506200422560:web:45d6a0ae35993e038771c5",
    measurementId: "G-DDSWMMTJB5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

        window.location = "kwitter_room.html";
}

