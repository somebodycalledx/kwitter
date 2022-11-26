var firebaseConfig = {
      apiKey: "AIzaSyBEO_LCAb9YF5yoywA5oPpZeQ9cezpj68M",
      authDomain: "kwitter-is-the-amazing-name.firebaseapp.com",
      databaseURL: "https://kwitter-is-the-amazing-name-default-rtdb.firebaseio.com",
      projectId: "kwitter-is-the-amazing-name",
      storageBucket: "kwitter-is-the-amazing-name.appspot.com",
      messagingSenderId: "917638894571",
      appId: "1:917638894571:web:5f9ba26bf5f85ac4ec7fae"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
//Start code
      console.log("hello")
      names = message_data['name'];
      messages = message_data['message'];
      likes = message_data['like'];
      name_with_tag = "<h4>"+ names +  "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'> " + messages + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id + "value ="+likes+"onclick='updateLike(this.id)'"
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like" + likes + "</span> </button> <hr>"

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

console.log("hello")

function updateLike(message_id) {
      button_id = message_id;
      likes=document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      })
}



function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
}
