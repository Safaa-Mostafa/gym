const navbarMenu = document.querySelector("#navbar .links");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

$("#navbar a,.btn").on("click",function(event){
      if (this.hash !==""){
          event.preventDefault();
          const hash =this.hash;
          $("html, body").animate({scrollTop: $(hash).offset().top-100},800);
      }
      });
//Navbar opacity
window.addEventListener("scroll",function(){
    if(window.scrollY>150){
        document.querySelector("#navbar").style.opacity =0.9;
    }else{
        document.querySelector("#navbar").style.opacity=1;
    }

});
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
  
