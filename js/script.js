// Get the headers position from the top of the page, set to 90% of the viewport height
var startY = window.innerHeight * 0.1; // This sets startY to 90vh
var previous = window.scrollY;


$(window).scroll(function(){
    checkY();
});

function checkY(){
    var current = window.scrollY;
    if( $(window).scrollTop() > startY ){
        $('.masthead-top').slideUp(100);
        if (previous > current && $(window).scrollTop() >  window.innerHeight * 0.1) {
            $('.masthead-bottom').slideDown();
        } else {
            $('.masthead-bottom').slideUp();
        }
    }else{
        $('.masthead-top').slideDown(); 
        $('.masthead-bottom').slideUp(); // Hide the masthead if scrolled above startY
    }
    previous = current;
}

// Do this on load just in case the user starts halfway down the page
checkY();
