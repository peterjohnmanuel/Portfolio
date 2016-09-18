/**
 * 
 * Project View Model 
 * @class ProjectViewModel
 * 
 */

function ProjectViewModel() {

    var self = this;
    self.projects = ko.observableArray(allProjects);
    self.selectedProject = ko.observable();

    self.showProject = function (project) {
        self.selectedProject(project);
    };
}