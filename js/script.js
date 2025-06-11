// var previous = window.scrollY;
// $(window).scroll(function(){
//     checkY();
// });

// function checkY(){
//     var current = window.scrollY;
//     if (previous >= current) {
//         $('.masthead').slideDown();
//     } else {
//         $('.masthead').slideUp();
//     }
//     previous = current;
// }

// // Do this on load just in case the user starts halfway down the page
// checkY();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var previous = window.pageYOffset;
window.onscroll = function () {
    var current = window.pageYOffset;

    //Find if the user is scrolling down or up on each scroll
    if (previous > current) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-200px";
    }
    previous = current;
}