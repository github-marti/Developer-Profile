// project image array
const projectImages = [
  'assets/images/weather-dashboard.png',
  'assets/images/code-quiz.png',
  'assets/images/day-planner.png',
  'assets/images/password-generator.png'
]

const projectArray = [
  {
    title: "WordLove",
    description: "Vocabulary learning app that allows users to look up words and phrases in other languages and save them to their own custom vocabulary lists. Users can even practice their saved words with flashcards.",
    languages: "HTML, CSS, JavaScript, Node.js, MySQL",
    github: "https://github.com/github-marti/Lets-Talk",
    deployed: "https://wordlove.herokuapp.com/"
  },
  {
    title: "Team Profile Generator",
    description: "Node CLI application that generates a PDF 'Team Profile' based on the user's command line input.",
    languages: "HTML, Node.js",
    github: "https://github.com/github-marti/Template-Engine---Team-Summary",
    deployed: "https://drive.google.com/file/d/1TSojiEpSEBctz4BQWzw6_JXx6T03dC6_/view"
  },
  {
    title: "Note Taker",
    description: "Express application that allows users to save, update, and delete notes using a mySQL database.",
    languages: "HTML, CSS, JavaScript, Node.js, MySQL",
    github: "https://github.com/github-marti/Note-Taker",
    deployed: "https://martis-note-taker.herokuapp.com/"
  },
  {
    title: "Weather Dashboard",
    description: "Want to check your local weather forecast? No problem! This app shows you the local weather conditions and allows you to search for the weather in the city of your choice.",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/github-marti/Weather-Dashboard",
    deployed: "https://github-marti.github.io/Weather-Dashboard/"
  },
  {
    title: "Code Quiz",
    description: "Test out your coding knowledge! Answer a series of questions about coding before the time limit runs out. You can log your score and check the high score board to see how you compare to others!",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/github-marti/Code-Quiz",
    deployed: "https://github-marti.github.io/Code-Quiz/"
  },
  {
    title: "Musi-Holic",
    description: "Looking for the perfect cocktail and music combination? Sit back, relax, and open this app! Input your favorite ingredients and pick one of the available drink recipes, and Musi-Holic will recommend a song for you based on your drink of choice.",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/github-marti/Code-Imposters-Project",
    deployed: "https://github-marti.github.io/Code-Imposters-Project/"
  }
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
  $('.section').each(function (index) {
    if ($(this).position().top <= (position + header)) {
      $("a.active").removeClass('active');
      $("a").eq(index).addClass('active');
    }
  });
});

// make navbar sticky once scrolling down past header
window.onscroll = function () { stickyNavBar() };

// make modal appear when project image is clicked
$('.project-wrapper').click(function () {
  let modalIndex = $(this).attr('modal-index');
  $('.modal-title').text(projectArray[modalIndex].title);
  $('.modal-description').text(projectArray[modalIndex].description);
  $('.modal-github').attr("href", projectArray[modalIndex].github);
  $('.modal-deployed').attr("href", projectArray[modalIndex].deployed);
  $('.modal-languages').text(projectArray[modalIndex].languages);
  $('.modal').attr('style', 'display:block;');
})

// make modal disappear when screen is narrow
$('.close').click(function () {
  $('.modal').attr('style', 'display:hidden;');
})

