const projectObject = [
    {
        "title": "Weather Dashboard",
        "image": "assets/images/weather-dashboard.png",
        "description": "Want to check your local weather forecast? No problem! This app shows you the local weather conditions and allows you to search for the weather in the city of your choice.",
        "url": "https://github-marti.github.io/Weather-Dashboard/",
        "repository": "https://github.com/github-marti/Weather-Dashboard",
        "code": "JavaScript"
    },
    {
        "title": "Code Quiz",
        "image": "assets/images/code-quiz.png",
        "description": "Test out your coding knowledge! Answer a series of questions about coding before the time limit runs out. You can log your score and check the high score board to see how you compare to others!",
        "url": "https://github-marti.github.io/Code-Quiz/",
        "repository": "https://github.com/github-marti/Code-Quiz",
        "code": "JavaScript"
    },
    {
        "title": "Day Planner",
        "image": "assets/images/day-planner.png",
        "description": "Use this simple app to plan out your activities for the working day. Press the save button to log your scheduled task, and come back to check on your to-do list!",
        "url": "https://github-marti.github.io/Day-Planner/",
        "repository": "https://github.com/github-marti/Day-Planner",
        "code": "JavaScript"
    },
    {
        "title": "Password Generator",
        "image": "assets/images/password-generator.png",
        "description": "This little program will help you create a random password of your choice for all of your security needs. Click the 'Generate Password' button and select the characters you would like your password to contain, and then easily copy your randomly generated password to the clipboard!",
        "url": "https://github-marti.github.io/Password-Generator/",
        "repository": "https://github.com/github-marti/Password-Generator",
        "code": "JavaScript"
    }
];

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

$(".topnav a").click(function () {
    $("a.active").removeClass('active');
    $(this).addClass('active');
    let activeSection = $(this).attr('href'); //get active section id
    $('html, body').animate({
    //and scroll to the section
    scrollTop: $(activeSection).offset().top
    }, 1000);
});
  
  
$(document).scroll(function () {
//get document scroll position
    let position = $(document).scrollTop(); 
    //get header height
    let header = $('.topnav').outerHeight();
    
    //check active section
    $('.section').each(function(i) {
        if($(this).position().top <= (position + header))
        {
            $("a.active").removeClass('active');
            $("a").eq(i).addClass('active');
        }
    });
}); 
  

function appendProjects() {
    for (let i = 0; i < projectObject.length; i++) {

        let project = projectObject[i];
        let projectWrapper = $('<div>');
        let projectTitle = $('<h1>').text(project.title);
        let projectDiv = $('<div>');
        let projectImg = $('<img>');
        let projectDesc = $('<p>').text(project.description);
        let deployedLink = $('<a>').html('<i class="fas fa-link fa-sm"></i>');
        let repoLink = $('<a>').html('<i class="fab fa-github fa-sm"></i>');

        projectWrapper.addClass('project-wrapper');
        projectTitle.addClass('project-title');
        projectDiv.addClass('project-description');
        projectImg.attr('src', project.image);
        projectImg.addClass('project-image');
        deployedLink.attr('href', project.url);
        deployedLink.attr('target', '_blank');
        deployedLink.addClass('float-right project-icon');
        repoLink.attr('href', project.repository);
        repoLink.attr('target', '_blank');
        repoLink.addClass('float-right project-icon');
        
        projectTitle.append(deployedLink, repoLink);
        projectDiv.append(projectImg, projectDesc);
        projectWrapper.append(projectTitle, projectDiv);
        $('.projects-container').append(projectWrapper);

    };
};

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNavBar()};

appendProjects();

