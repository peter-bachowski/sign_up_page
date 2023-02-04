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
    document.getElementById("mainForm").style.alignItems = "center";
    document.getElementById("myForm").style.justifyContent = "center"
    document.getElementById("filler1").style.alignItems = "center";
    document.getElementById("filler2ContentContainer").className = "filler2ContentContainerCenter";
  }
  else {
    document.body.style.display = "flex";
    document.getElementById("leftContainer").style.height = "100%";
    document.getElementById("filler1").style.alignItems = "";
    document.getElementById("mainForm").style.alignItems = "";
    document.getElementById("myForm").style.justifyContent = ""
    document.getElementById("filler2ContentContainer").className = "";
  }
}

function setLogoPosition() {
  const filler1Height = $("#filler1").height(), logoDiv = document.getElementById("logoDiv");

  let height = filler1Height - logoDiv.offsetHeight;

  logoDiv.style.top = height + "px";
  console.log(logoDiv.style.top);
}

window.onload = () => {
  setLogoPosition();
  checkWidth();
}

window.addEventListener("resize", checkWidth);
window.addEventListener("resize", setLogoPosition);

