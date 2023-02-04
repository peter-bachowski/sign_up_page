const submitBtn = document.getElementById("submitButton"), passwordElmnt = document.getElementById("password"), passwordConfirmElmnt = document.getElementById("confirm_password");

submitBtn.onclick = function() {
  if (passwordElmnt.value != passwordConfirmElmnt.value) {
    const passwordErrorDiv = document.createElement("div");
    document.getElementById("confirmPasswordInputContainer").appendChild(passwordErrorDiv);
    passwordConfirmElmnt.setCustomValidity("Passwords Don't Match");
  }
  else {
    passwordConfirmElmnt.setCustomValidity("");
  }
}

function checkWidth() {
  let width = $("body").width();
  if (width <= 980) {
    document.body.style.display = "block";
    document.getElementById("leftContainer").style.height = "400px";
  }
  else {
    document.body.style.display = "flex";
    document.getElementById("leftContainer").style.height = "100%";
  }
}

window.onload = () => { checkWidth(); }

window.addEventListener("resize", checkWidth);

