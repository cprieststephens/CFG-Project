//Function to create alert for cart icon
let emptyCartMessage = document.getElementById("cart_message");
function cartAlert() {
  emptyCartMessage.innerText = "Your cart is empty";
}

//Function to create message on click of mailing list submit button
let mailingListForm = document.getElementById("mailing_list");
function emailAlert() {
  mailingListForm.innerText = "Thank you! Your discount code is NEWNOV22.";
}

//Function to create alert for mailing list text
let mailingListPrompt = document.getElementById("mailing_list_prompt");
function discountAlert() {
  mailingListPrompt.innerText =
    "Sign up for our mailing list to receive 10% off your next order!";
}
