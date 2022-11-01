//Landing Page

//Function to create prompt message for mailing list
let mailingListPrompt = document.getElementById("mailing_list_prompt");
function discountMessage() {
  mailingListPrompt.innerText =
    "Sign up for our mailing list to receive 10% off your next order!";
}

//Function to validate mailing list form
let email = document.getElementById("email");
let emailErrorMessage = document.getElementById("email_error_message");
let mailingListForm = document.getElementById("mailing_list");
function emailMessage() {
  if (email.value == "") {
    emailErrorMessage.innerText = "Please enter your email address:";
  } else {
    mailingListForm.innerText = "Thank you! Your discount code is MAIL10";
    mailingListForm.style.paddingTop = "2%";
    mailingListForm.style.paddingBottom = "1.5%";
  }
}

//Login Page

//Function to validate login form
let loginEmail = document.getElementById("login_email");
let loginPassword = document.getElementById("login_password");
let loginFeedback = document.getElementById("login_feedback");
function loginMessage() {
  if (loginEmail.value == "") {
    loginFeedback.innerText = "Please enter your email address:";
  } else if (loginPassword.value == "") {
    loginFeedback.innerText = "Please enter your password:";
  } else {
    loginFeedback.innerText = "Thank you!";
  }
}

//Function to reset password
let resetCheckBox = document.getElementById("reset_check_box");
let resetTitle = document.getElementById("reset_title");
let rememberMe = document.getElementById("remember_me");
let loginButton = document.getElementById("login_button");
let resetPasswordForm = document.getElementById("login_form");
resetCheckBox.addEventListener("change", function (event) {
  if (event.currentTarget.checked) {
    resetTitle.innerText = "Reset Your Password";
    loginFeedback.innerText =
      "Please enter your email address and we'll send a reset link:";
    loginPassword.style.display = "none";
    loginPassword.value = "xxx";
    rememberMe.style.display = "none";
    loginButton.innerText = "Submit";
    resetPasswordForm.style.height = "50vh";
  }
});

//Function to validate registration form
let registerEmail = document.getElementById("register_email");
let registerPassword = document.getElementById("register_password");
let repeatPassword = document.getElementById("repeat_password");
let registerFeedback = document.getElementById("register_feedback");
function registerMessage() {
  if (registerEmail.value == "") {
    registerFeedback.innerText = "Please enter your email address:";
  } else if (registerPassword.value == "") {
    registerFeedback.innerText = "Please enter a password:";
  } else if (repeatPassword.value == "") {
    registerFeedback.innerText = "Please re-enter your password:";
  } else {
    registerFeedback.innerText = "Thank you for creating your account!";
  }
}
