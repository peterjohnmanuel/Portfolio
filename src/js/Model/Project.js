/**
 * Work done during projects
 * @class Project
 * @param name
 * @param description
 * @param technologies
 * @param githubLink
 */
function Project(name, description, technologies, githubLink, projectPicture) {

    var self = this;

    self.name = name;
    self.description = description;
    self.technologies = technologies;
    self.githubLink = githubLink;
    self.projectPicture = projectPicture;
}


/** Project 1: Udacity Front End Nano Degree Portfolio */
var project1Description = `The portfolio was developed to showcase projects during a course and for the rest of my career. 
During the podcasts of this module languages and methodologies such as HTML5, CSS3, Responsive Web Design, Grunt etc was introduced to create a foundation for building the project artefact. 
Overtime I refactored the portfolio to include technologies and frameworks such as gulp, sass, knockout and mvvm for better code management and to host it on a webserver.`;

/**Project1: Pictures */
var project1Pictures =
    {
        modal: "img/modals/Portfolio_modal.png",
        thumbnail: "img/thumbnails/Portfolio_thumbnail.png"
    };

/**Project 1: Technologies */
var project1Technologies = [technologyList.apache, technologyList.bootstrap, technologyList.bower, technologyList.css3, technologyList.fontAwesome, technologyList.grunt, technologyList.gulp, technologyList.html5,
    technologyList.javascript, technologyList.jQuery, technologyList.raspberryPi, technologyList.responsiveWebDesign, technologyList.sass];

/** Project 2: Udacity Front End Nano Degree Online Resume */
var project2Description = `The online resume was part of the course taken to showcase my experience. 
The concept of using template patterns was discussed during the podcasts in order to complete the project. 
Another concept that was introduced but is not new to me was version control. 
Although version control is not new to me learning and using the git version control I was able to keep track of changes and learnt about branching and how version control can make development and tracking changes easier during an applications life cycle. 
Overtime I refactored the resume for better code management.`;

/** Project 2: Pictures */
var project2Pictures =
    {
        modal: "img/modals/Resume_modal.png",
        thumbnail: "img/thumbnails/Resume_thumbnail.png"
    };

/** Project 2: Technologies */
var project2Technologies = [technologyList.apache, technologyList.bootstrap, technologyList.bower, technologyList.css3, technologyList.fontAwesome, technologyList.gulp, technologyList.html5,
    technologyList.javascript, technologyList.jQuery, technologyList.responsiveWebDesign, technologyList.sass];


/** Project 3: Udacity Front End Nano Degree HTML5 Game */
var project3Description = `Developing a basic gaming engine was used to learn javascript patterns such as prototype chaining during one of the modules of the course. Concepts such as inheritance was introduced in the javascript language to objects interacting with one another during the game cycle. During podcasts the benefits of readme's was discussed. Learning how to write readme mock-ups is important as it can help other developers getting started using projects.
`;

/** Project 3: Pictures */
var project3Pictures =
    {
        modal: "img/modals/Classic_Arcade_Game_modal.png",
        thumbnail: "img/thumbnails/Classic_Arcade_Game_thumbnail.png"
    };

/** Project 3: Technologies */
var project3Technologies = [technologyList.bootstrap, technologyList.css3, technologyList.gulp, technologyList.html5, technologyList.javascript];


/** Project 4: Udacity Front End Nano Degree Website Optimization */
var project4Description = `Often when developing software sometimes the critical rendering path of the website is overlooked. This project demonstrated how to use Google chrome developer tools to remove jank and to optimize the performance of the website by analysing the timeline and rendering path of the Document Object Module (DOM).Rather than focusing on web and application design this project focused on the performance of a website. Using Google chrome developer tools, a given solution was analysed and had to be optimized in order to make the website a friendlier user experience. Other tools such as gulp, Google page speed insights and ngrok was also used to help reduce jank in the given website.
`;

/** Project 4: Pictures */
var project4Pictures =
    {
        modal: "img/modals/Web_Optimization_modal.png",
        thumbnail: "img/thumbnails/Web_Optimization_thumbnail.png"
    };

/** Project 4: Technologies */
var project4Technologies = [technologyList.gulp];

/** Project 5: Udacity Front End Nano Degree Neighborhood Map */
var project5Description = `Usages of API is becoming more and more popular. The Neighbourhood Map is a basic project that shows the usage of the 3rd party API's. During the build up to this project, design patterns such as such as MVC, MVP and MVVM was introduced. Later existing frameworks such as KnockoutJS was used to create a MVVM application. This projects requirement was to use Google maps API and another 3rd party API to display information on places with map markers.        
`;

/**Project 5: Pictures */
var project5Pictures =
    {
        modal: "img/modals/Neighborhood_Map_modal.png",
        thumbnail: "img/thumbnails/Neighborhood_Map_thumbnail.png"
    };

/** Project 5: Technologies */
var project5Technologies = [technologyList.bootstrap, technologyList.bower, technologyList.css3, technologyList.fontAwesome, technologyList.gulp,
    technologyList.html5, technologyList.javascript, technologyList.knockout, technologyList.responsiveWebDesign, technologyList.sass];

/** Project 6: Udacity Front End Nano Degree Feed Reader */
var project6Description = `Benefits of testing first in the software is a great asset to reduce time when an application has a bug.  Although it can take some time writing tests, it’s a good practice to have when an expected outcome is not met. This module and project taken during a course discussed the concept of Test Driven Development (TDD) and Behaviour Driven Development (BDD) in web development. Using jasmine, testing was done to check the behaviour of elements and how triggering an event might affect the Document Object Model (DOM).
`;

/**Project 6: Pictures */
var project6Pictures =
    {
        modal: "img/modals/Feed_Reader_modal.png",
        thumbnail: "img/thumbnails/Feed_Reader_thumbnail.png"
    };

/** Project 6: Technologies */
var project6Technologies = [technologyList.html5, technologyList.javascript, technologyList.jQuery, technologyList.jasmine];


/** Project instances */

var project1 = new Project("Portfolio", project1Description, project1Technologies, "https://github.com/peterjohnmanuel/Portfolio", project1Pictures);
var project2 = new Project("Resume", project2Description, project2Technologies, "https://github.com/peterjohnmanuel/Resume", project2Pictures);
var project3 = new Project("Classic Arcade Game", project3Description, project3Technologies, "https://github.com/peterjohnmanuel/ClassicArcadeGame", project3Pictures);
var project4 = new Project("Web Optimization", project4Description, project4Technologies, "https://github.com/peterjohnmanuel/Weboptimization", project4Pictures);
var project5 = new Project("Neighborhood Map", project5Description, project5Technologies, "https://github.com/peterjohnmanuel/NeighborhoodMap", project5Pictures);
var project6 = new Project("Feed Reader", project6Description, project6Technologies, "https://github.com/peterjohnmanuel/Feedreader", project6Pictures);

var allProjects = [project1, project2, project3, project4, project5, project6];