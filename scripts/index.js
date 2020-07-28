var inUse = false;

/**
* Validates email string using regular expression.
* Email should follow common form of "test@email.com"
*/
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
* Perform on-click placeholder logic for Internship Signup Form submit.
* Validate email & interest form content via DOM, if pass replace content div with placeholder text.
*/
function validate() {
  if (inUse) {
    return;
  }
  inUse = true;
  var submit = document.getElementById("submit");
  var email = document.getElementById("email");
  var pwdmsg = document.getElementById("password-msg");
  var interest = document.getElementById("interest");

  if (validateEmail(email.value)) {
    console.log("User email: " + email.value + "\nUser Interest: " + interest.value);
    submit.value = "Submitting...";
    setTimeout(replaceBody, 2000);
    return true;
  } else {
    pwdmsg.style = "visibility:visible";
    email.classList.add("email-error");
    //email.style = "border-color: #d02035";
    email.value = "";
  }
  inUse = false;
  return false;
}
/**
* Replaces content div element with placeholder success message.
* Should not be used except in test cases.
*/
function replaceBody() {
  inUse = false;
  var content = document.getElementById("content");
  content.innerHTML = "<h2 class=\"heading2\">Thanks for your interest!</h2><p class=\"paragraph\">We will review your application and contact you should your background and experience meet the requirements of one of our openings.</p>";
}
