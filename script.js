// project image array
const projectImages = [
  'assets/images/weather-dashboard.png',
  'assets/images/code-quiz.png',
  'assets/images/day-planner.png',
  'assets/images/password-generator.png'
]

// variables for sticky navbar 
const navBar = document.getElementById("stickynavbar");
const sticky = navBar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

// scroll to navbar section
$(".scroll-links a").click(function (e) {
    e.preventDefault();
    let activeSection = $(this).attr('href'); //get active section id
    $('html, body').animate({
    //and scroll to the section
    scrollTop: $(activeSection).offset().top
    }, 1000);
});
  
// change navbar active class depending on scroll position
$(document).scroll(function () {
//get document scroll position
    let position = $(document).scrollTop(); 
    //get header height
    let header = $('.topnav').outerHeight();
    
    //check active section
    $('.section').each(function(index) {
        if($(this).position().top <= (position + header))
        {
            $("a.active").removeClass('active');
            $("a").eq(index).addClass('active');
        }
    });
}); 

// make navbar sticky once scrolling down past header
window.onscroll = function() {stickyNavBar()};

// make modal appear on clicking the "see images" button
$('.image-expand').click(function () {
    let modalIndex = $(this).attr('modal-index');
    $('.modal-image').attr('src', projectImages[modalIndex]);
    $('.modal').attr('style', 'display:block;');
});

// make modal appear when project image is clicked
$('.project-image').click(function() {
    let modalIndex = $(this).attr('modal-index');
    $('.modal-image').attr('src', projectImages[modalIndex]);
    $('.modal').attr('style', 'display:block;');
})

// make modal disappear when screen is narrow
$('.close').click(function() {
    $('.modal').attr('style', 'display:hidden;');
})

