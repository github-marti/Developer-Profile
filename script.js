projectObject = [
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

function toggleNavBar() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function onScroll(event){
    // pixels away from top of screen
    let scrollPos = $(document).scrollTop();
    $('.topnav a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active"); //added to remove active class from all a elements
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
    }

function appendProjects() {
    for (let i = 0; i < projectObject.length; i++) {

        let project = projectObject[i];
        let projectTitle = $('<h1>').text(project.title);
        let projectDiv = $('<div>');
        let projectImg = $('<img>');
        let projectDesc = $('<p>').text(project.description);
        let deployedLink = $('<a>').html('<i class="fas fa-link fa-sm"></i>');
        let repoLink = $('<a>').html('<i class="fab fa-github fa-sm"></i>');

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
        $('.projects-container').append(projectTitle, projectDiv);
    };
};

appendProjects();

