
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
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name :)"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = ("kwitter_page.html");
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("index.html");
}

