//Function to create message on mouseover of cart icon and cart text
let emptyCartMessage = document.getElementById("cart_message");
function cartMessage() {
  emptyCartMessage.innerText = "Your cart is empty";
}

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
    emailErrorMessage.innerText = "Please enter your email address";
  } else {
    mailingListForm.innerText = "Thank you! Your discount code is TAKE10";
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
    loginFeedback.innerText = "Welcome back!";
  }
}

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
