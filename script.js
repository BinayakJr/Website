// ======================= Script for about section ========================

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//======================= Script for side menu icon ====================

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


//====================== Script for google sheet form ====================

const scriptURL = 'https://script.google.com/macros/s/AKfycbwjBYAIgiFSrdo4MlUoczIqd9s1o1clqXY9s1NI7JWsW3L9Np6UfI8xCDjuHV6yp8sa/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully !"
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000)
            form.reset()
        })
        .catch(error => {
            msg.style.color = "red";
            msg.innerHTML = "Failed to sent message. Please try again !"
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000)
            form.reset()
        })
    //.catch(error => console.error('Error!', error.message))
})


//=========================== Script for scroll button buttom to top ==================
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//========================== Script for current date in copyright section ====================
const d = new Date();
var date = document.getElementById("currentDate");
date.innerHTML = d.getFullYear();


//======================= Typed JS =========================
const typed = new Typed('.multiple-text', {
    strings: ['Binayak', 'विनायक'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// //================ Script to change the background images for small devices ======================

// // Array of background image URLs for mobile devices
// var b = document.getElementById("header");
// const mobileBackgroundImages = [
//     'images/phone.jpg',
//     'images/phone2.jpg',
// ];

// let currentIndex = 0; // Current index in the array

// // Function to change the background image for mobile devices
// function changeBackgroundForMobile() {
//     if (innerWidth <= 600) {
//         i = document.getElementsByClassName("header-text.fa-solid");
//         i.st
//         b.style.backgroundImage = `url('${mobileBackgroundImages[currentIndex]}')`;
//         currentIndex = (currentIndex + 1) % mobileBackgroundImages.length; // Cycle through images
//     }
// }

// // Initial call to set the background based on the device width
// changeBackgroundForMobile();

// // Event listener to update the background for mobile devices when the window is resized
// window.addEventListener('resize', changeBackgroundForMobile);

// // Set an interval to change the background every 5 seconds (5000 milliseconds)
// setInterval(changeBackgroundForMobile, 5000);

