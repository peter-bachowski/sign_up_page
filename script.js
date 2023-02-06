
//vairables

const submitBtn = document.getElementById("submitButton"), passwordElmnt = document.getElementById("password"), passwordConfirmElmnt = document.getElementById("confirm_password");

submitBtn.onclick = function() {
  if (passwordElmnt.value != passwordConfirmElmnt.value) { //checks if the passwords are the same in both password inputs; 
    //if not same, will give an error message that they don't match 
    passwordConfirmElmnt.setCustomValidity("Passwords Don't Match"); //shows error that passwords don't match
  }
  else {
    passwordConfirmElmnt.setCustomValidity(""); //no error message
  }
}

//functions

function checkWidth() { //checks width of the page, then sets the order of the page divs
  let width = $("body").width();
  if (width <= 980) { //width less than or equal to 980 pixels will center the content
    document.body.style.display = "block";
    document.getElementById("leftContainer").style.height = "400px";
    document.body.style.height = "100%";
    document.getElementById("mainForm").style.alignItems = "center";
    document.getElementById("myForm").style.justifyContent = "center"
    document.getElementById("filler1").style.alignItems = "center";
    document.getElementById("filler2ContentContainer").className = "filler2ContentContainerCenter";
    logoDiv.style.top = "100px";
  }
  else { //width greater than 980 pixels will set the page flow to the original positions and order
    document.body.style.display = "flex";
    document.body.style.height = "";
    document.getElementById("leftContainer").style.height = "100%";
    document.getElementById("filler1").style.alignItems = "";
    document.getElementById("mainForm").style.alignItems = "";
    document.getElementById("myForm").style.justifyContent = ""
    document.getElementById("filler2ContentContainer").className = "";

    const filler1Height = $("#filler1").height(), logoDiv = document.getElementById("logoDiv"); //checks height of text area using jquery and assigns variables
    let height = filler1Height - logoDiv.offsetHeight;

    logoDiv.style.top = height + "px";
    console.log(logoDiv.style.top); //for troubleshooting
  }
}

//onload and listeners

window.onload = () => {
  checkWidth();
}

window.addEventListener("resize", checkWidth);


