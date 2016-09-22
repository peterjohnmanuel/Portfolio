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
var project1Description = `Project 1 of the Udacity Front End Nano Degree Program involved creating 
a portfolio detailing all of the projects done in the past. During the podcasts of the project technologies such as HTML5, CSS3, Responsive Web Design
, Grunt etc was introduced to create build up to the project artifact.
 Overtime I refactored the portfolio project to include technologies and frameworks such as gulp, sass ,knockout and mvvm for better code management`;

/**Project1: Pictures */
var project1Pictures =
    {
        modal: "",
        thumbnail: ""
    };

/**Project 1: Technologies */
var project1Technologies = [technologyList.bootstrap, technologyList.bower, technologyList.css3, technologyList.fontAwesome, technologyList.grunt, technologyList.gulp, technologyList.html5,
    technologyList.javascript, technologyList.jQuery, technologyList.responsiveWebDesign, technologyList.sass];

/** Project 2: Udacity Front End Nano Degree Online Resume */
var project2Description = `Project 2 of the Udacity Front End Nano Degree Program was to create an online resume. The concept of using template patterns
was discussed during the podcasts in order to complete the project. Another concept that was introduced but is not new to me was version control. Using the git 
version control I was able to keep track of changes and learnt about branching and how version control can make development easier during an applications life cycle.
`;

/** Project 2: Pictures */
var project2Pictures =
    {
        modal: "img/modals/Resume_modal.png",
        thumbnail: "img/thumbnails/Resume_thumbnail.png"
    };

/** Project 2: Technologies */
var project2Technologies = [];


/** Project 3: Udacity Front End Nano Degree HTML5 Game */
var project3Description = `Project 3 of the Udacity Front End Nano Degree Program involed the usage of javascript design patterns. Javascript patterns such as prototype chaining was
used in order to create a small HTML game. Concepts such as inheritance was introduced in the javascript langauge to objects interacting with one another during the game cycle. During
podcasts the benifits of readme's was also discussed and how it can help other developers get started using you projects.
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
var project4Description = `Project 4 of the Udacity Front End Nano Degree Program was a bit different to projects that I'm usally use to developing. Rather than focusing on 
web and application design this project focused on the performance of a website. Using google chrome developer tools, a given solution was analysed and had to be optimizied in order to make the 
website a more friendly user experiance. Other tools such as gulp and ngrok was also used to help reduce jank in the given website. 
`;

/** Project 4: Pictures */
var project4Pictures =
    {
        modal: "img/modals/Web_Optimization_modal.png",
        thumbnail: "img/thumbnails/Web_Optimization_thumbnail.png"
    };

/** Project 4: Technologies */
var project4Technologies = [];

/** Project 5: Udacity Front End Nano Degree Neighborhood Map */
var project5Description = `Project 5 of the Udacity Front End Nano Degree Program was to create an Neighborhood Map project detailing places that you might want to visit. During the build up to this project
the design patterns were introduced such as MV*, MVC, MVP and MVVM. Later existing frameworks such as knockout js was introduced. Another concept introduced was the integration of 
third party api's. During the neighborhood map project google maps api was required in order to create a map with map markers.     
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
var project6Description = `Project 6 of the Udacity Front End Nano Degree Program discussed the importance of testing. During the podcasts the concept of Test Driven Development (TDD)
was discussed in web development. Using testing to drive the development of your application to make sure you application still works while making changes is important to keep the integrity
of a working application. Jasmine testing framework was used to write tests in an existing application during the application.
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