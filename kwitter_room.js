const firebaseConfig = {
    apiKey: "AIzaSyD2G--CECvARUOvChLKgL5XajC0GipUfeA",
    authDomain: "mycity-wkmk.firebaseapp.com",
    projectId: "mycity-wkmk",
    storageBucket: "mycity-wkmk.appspot.com",
    messagingSenderId: "340421583562",
    appId: "1:340421583562:web:849ad223e75dae5487ca33",
    measurementId: "G-5PC31XL1VP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom() 
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
    });
}

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";

    
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
//End code
});});}
getData();


  