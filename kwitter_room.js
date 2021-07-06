var firebaseConfig = {
      apiKey: "AIzaSyDy050pK0LSNCpLfizHLidiWvoq20YZDuQ",
      authDomain: "wassup2-12315.firebaseapp.com",
      projectId: "wassup2-12315",
      storageBucket: "wassup2-12315.appspot.com",
      messagingSenderId: "1011217160711",
      appId: "1:1011217160711:web:5f67e343949894bd5a68a2",
      measurementId: "G-1K20FZK0PP"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name;
firebase.initializeApp(firebaseConfig);
function getData()

 {  firebase.database().ref("/").on('value', function(snapshot)
 { 
   document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();
function addRoom()
{
  

  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
  });
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0

  });
}