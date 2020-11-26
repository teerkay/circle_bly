console.log("hello");

// console.log($("form #email-button").html());

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

$("#email-btn").on("click", (e) => {
  e.preventDefault();
  console.log("I have been clicked");
  let formLabel = $(".form-label");

  let emailAddress = $("#email-input");

  const result = emailIsValid(emailAddress.val());

  if (result) {
    formLabel.text("Your All Access Pass is on the Way!");
    emailAddress.val("");
  } else {
    formLabel.text("Your Email Address is Invalid");
    emailAddress.focus();
  }
  console.log($(".form-label").text());
});
