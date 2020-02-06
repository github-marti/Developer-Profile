const projectArray = [
  {
    title: "Date Rescue",
    languages: "React.js, Bootstrap, Express, Node.js, MySQL"
  },
  {
    title: "WordLove",
    languages: "HTML/CSS, JavaScript, jQuery, Express, Node.js, MySQL"
  },
  {
    title: "Musiholic",
    languages: "Vue.js, Bootstrap"
  },
  {
    title: "the Library",
    languages: "Python, Django"
  },
  {
    title: "Weather Dashboard",
    languages: "HTML/CSS, JavaScript, jQuery"
  },
  {
    title: "Team Profile Generator",
    languages: "HTML/CSS, Node.js"
  },
  {
    title: "Note Taker",
    languages: "HTML/CSS, JavaScript, jQuery, Express, Node.js, MySQL"
  }
]

// variables for sticky navbar 
const navBar = document.getElementById("topnav");
const about = document.getElementById("about");
const sticky = navBar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
    about.classList.add("offset");
  } else {
    navBar.classList.remove("sticky");
    about.classList.remove("offset");
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
  let header = $('#topnav').outerHeight();

  //check active section
  $('.section').each(function (index) {
    if ($(this).position().top <= (position + header)) {
      $("a.active").removeClass('active');
      $("a").eq(index).addClass('active');
    }
  });
});

// make navbar sticky once scrolling down past header
window.onscroll = function () { stickyNavBar() };

// filter projects based on selected language
$('.lang-title').on('click', function(event) {
  $('.lang-title').removeClass('active-lang');
  $(this).addClass('active-lang');
  if (event.target.textContent === 'All') {
    $('.project-wrapper').show();
  } else {
    // get array of projects that use selected language
    const toHide = projectArray.filter(e => !e.languages.includes(event.target.textContent)).map(e => e.title);
    const toShow = projectArray.filter(e => e.languages.includes(event.target.textContent)).map(e => e.title);
    toHide.forEach(p => {
      $(`#${p.toLowerCase().replace(/\s/g, '-')}`).hide();
    });
    toShow.forEach(p => {
      $(`#${p.toLowerCase().replace(/\s/g, '-')}`).show();
    });
  }
})

// make image div scroll in when clicked
$('.slide-in').click(function() {
  $(this).toggleClass('show');
})


