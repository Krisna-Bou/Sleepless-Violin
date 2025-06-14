var previous = window.pageYOffset;
window.onscroll = function () {
    var current = window.pageYOffset;

    //Find if the user is scrolling down or up on each scroll
    if (previous > current) {
        document.getElementById("header").style.top = "0";
    } else {
        if (current > 300) {
            document.getElementById("header").style.top = "-200px";
        }
    }
    previous = current;
    if (current < 300) {
        document.getElementById("header").style.top = "0";
    }
}