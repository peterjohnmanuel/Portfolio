/**
 * Work done during projects
 * @class Project
 * @param name
 * @param description
 * @param technologies
 * @param githubLink
 */
function Project(name, description, technologies, githubLink){

var self = this;

    self.name = name;
    self.description = description;
    self.technologies = technologies;
    self.githubLink = githubLink;
}

var project1Description = `Project 1 of the Udacity Front End nano Degree Program involved creating 
a portfolio detailing all of the projects done in the past. During the podcasts of the project technologies such as HTML5, CSS3, Responsive Web Design
, Grunt etc. Overtime I refactored the portfolio project to include technologies and frameworks such as knockout and mvvm for better code management`;

var project1 = new Project("Portfolio", project1Description, "" , "");

var allProjects = [project1];