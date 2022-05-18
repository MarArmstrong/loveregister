function changeImage() {
      if (document.getElementById("imgClickAndChange").class === "check")
       {
          document.getElementById("imgClickAndChange").src ="Gallery/Checkbox-on.png";
          document.getElementById("imgClickAndChange").class = "uncheck"
        }
else
          {
        document.getElementById("imgClickAndChange").src ="Gallery/Checkboxoff.png";
        document.getElementById("imgClickAndChange").class = "check"
    }
}


function showPass(){
  if (document.getElementById("id-password").type === "password")
  {
    document.getElementById("id-password").type = "text";
    document.getElementById("togglePassword").src = "Gallery/view.png";
  }
  else  {
    document.getElementById("id-password").type = "password";
    document.getElementById("togglePassword").src = "Gallery/visible.png";
  }
}

function showtrick(){
  if (document.getElementById("Usertrick").focus = true)
  {
    document.getElementById("trick").style.zIndex = 1;
    }
}

function hidetrick(){
    {
      document.getElementById("trick").style.zIndex = -1;
    }
}
