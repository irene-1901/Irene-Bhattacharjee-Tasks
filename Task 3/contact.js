function validationCheck() {
    var name1 = document.forms["myForm"]["myname"].value;
    var email = document.forms["myForm"]["myemail"].value;
    var phoneNo = document.forms["myForm"]["myPhone"].value;
    var msg = document.forms["myForm"]["msg"].value;
    var mailformat = /\S+@\S+\.\S+/ ;
    var phoneno = /^[\+]?[0-9]{2}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    //var working = document.forms["myForm"][""];

    if (name1 == "" || name1== " ") {
        alert("Please Enter your Name.");
        return false;
    }
    else if (email == "" || email ==" ") {
        alert("Please Enter your Email.");
        return false;
    }
    else if (!email.match(mailformat)){
        alert("Please Enter your Email.");
        return false;
    }
    else if (phoneNo == "" || phoneNo == " ") {
        alert("Please enter your Mobile No.");
        return false;
    }
    else if (!phoneNo.match(phoneno)) {
        alert("Mobile No. is not valid");
        return false;
    }
    else if(msg == "" || msg == " ") {
        alert("Please Enter your message.");
        return false;
    }
    else{
        alert("Your name: " + name1 + "\nYour email: " + email + "\nYour Phone no.: " + phoneNo + "\nYou message: " + msg);
       return true;
    }
    
    
}


