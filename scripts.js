// NAVIGATION TOGGLE  FUNCTION


document.addEventListener("DOMContentLoaded", () =>  {
   // alert("Welcome to Foodie Haven oooo");
 
const navToggle = document.querySelector(".toggleNav");
const navMenu = document.querySelector("#navigation");
navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("active");
});



})


function myFunction() {
    //alert("it worked!");
    const marveey = document.getElementsByClassName("link");
    marveey.style.color = "red";
}


//IMAGE SLIDER FUNCTION

document.addEventListener("DOMContentLoaded", ()=>{
    window.onload = function () {
        // Image Slider Logic
        let slideIndex = 0;
        showSlides();
        function showSlides() {
            let slides = document.getElementsByClassName ("slides");
            for (let i = 0; i < slides.length; i++) {
                slides[i] .style.display = "none";
        }
        slideIndex++;
         if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1] .style.display = "block";
        setTimeout(showSlides, 3000); // change image every 3 seconds
    }
        };
})


    