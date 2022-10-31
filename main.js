//Function to create message on mouseover of cart icon and cart text
let emptyCartMessage = document.getElementById("cart_message");
function cartMessage() {
  emptyCartMessage.innerText = "Your cart is empty";
}

//Function to create error message or confirmation message on click of mailing list submit button
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

//Function to create prompt message for mailing list text
let mailingListPrompt = document.getElementById("mailing_list_prompt");
function discountMessage() {
  mailingListPrompt.innerText =
    "Sign up for our mailing list to receive 10% off your next order!";
}
