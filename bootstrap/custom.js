function validatename(inputText) {
    var x = document.form1.name.value;
    var y = /^[A-Za-z\s]+$/.test(x);
    var mail= document.form1.email.value;
    var message=document.form1.message.value;
    var subject=document.form1.subject.value;
    if(y=="" && mail==""){
      window.alert("Fill in the form");
      
    }
    else if (y == false) {
      document.getElementById("name-error").innerHTML = "Name must only contain alphabets";
      return false;
    }
    else if(subject == ""){
      document.getElementById("subject-error").innerHTML="Enter Subject"
    }
    else if(message == ""){
      document.getElementById("message-error").innerHTML="Enter Message"
    }
    else {
      document.getElementById("subject-error").innerHTML=""
      document.getElementById("message-error").innerHTML=""
      document.getElementById("name-error").innerHTML = "";
      var mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (mail.match(mailFormat)) {
        document.getElementById("mail-error").innerHTML = "";
        document.getElementById("form1").action="https://formspree.io/f/mvojolvd";
        document.getElementById("form1").submit();
        // location.reload();
        return true;
      } 
      else {
        // location.reload();
        document.getElementById("mail-error").innerHTML = "Invalid Email Format";
        return false;
      }
    }
  }