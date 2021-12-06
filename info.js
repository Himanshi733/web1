function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    console.log(fname);
    var lname = document.forms["myForm"]["lname"].value;
    var uname = document.forms["myForm"]["uname"].value;
    var password = document.forms["myForm"]["password"].value;
    var age = document.forms["myForm"]["age"].value;
    var confirm_password = document.forms["myForm"]["confirm_password"].value;
    var radios = document.getElementsByName("degree");
    var formValid = false;

    var i = 0;
    
    
    if (fname === "") {
      window.alert("Please enter your first name.");
  
      fname.focus();
  
      return false;
    }
  
    if (lname.value === "") {
      window.alert("Please enter your last name.");
  
      lname.focus();
  
      return false;
    }
    
    if (uname.value === "") {
        window.alert("Please enter your user name.");
    
        uname.focus();
    
        return false;
      }
      while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option!");
  
    
    if (password === "") {
      window.alert("Please enter your Password.");
  
      password.focus();
  
      return false;
    }
  
    if (confirm_password === "") {
      window.alert("Please confirm your Password.");
  
      confirm_password.focus();
  
      return false;
    }
  
    if (password === "") {
      window.alert("Please enter your password");
  
      password.focus();
  
      return false;
    }
    if (age === "") {
        window.alert("Please enter your age");
    
        age.focus();
    
        return false;
      }
  
    let first_name = fname.split(" ");
    console.log(first_name);
    first_name?.map((element) => {
      if (first_name?.length > 0 && element[0] === element[0].toUpperCase()) {
        return true;
      } else {
        window.alert("First name should start with Caps");
        return false;
      }
    });
  
    let last_name = lname.split(" ");
    last_name?.map((element) => {
      if (last_name?.length > 0 && element[0] === element[0].toUpperCase()) {
        return true;
      } else {
        window.alert("Last name should start with Caps");
        return false;
      }
    });

    let user_name = uname.split(" ");
    console.log(user_name);
    user_name?.map((element) => {
      if (user_name?.length > 0 && element[0] === element[0].toUpperCase()) {
        return true;
      } 
      else {
        window.alert("User name should start with Caps");
        return false;
      }
    });
    console.log(password);
    console.log(confirm_password);
    if (password !== confirm_password) {
      window.alert("Passwords does not match");
      return false;
    }
    if ((age <=18) || (age>=60)) {
        window.alert("Age must be in between 18-60");
        return false;
      }
    
    return true;
  }
  