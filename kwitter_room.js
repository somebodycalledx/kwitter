
var firebaseConfig = {
      apiKey: "AIzaSyBEO_LCAb9YF5yoywA5oPpZeQ9cezpj68M",
      authDomain: "kwitter-is-the-amazing-name.firebaseapp.com",
      databaseURL: "https://kwitter-is-the-amazing-name-default-rtdb.firebaseio.com",
      projectId: "kwitter-is-the-amazing-name",
      storageBucket: "kwitter-is-the-amazing-name.appspot.com",
      messagingSenderId: "917638894571",
      appId: "1:917638894571:web:5f9ba26bf5f85ac4ec7fae"
    };
    
     firebase.initializeApp(firebaseConfig);

     function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_room.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem(room_name); 
      window.location = "index.html";
}


