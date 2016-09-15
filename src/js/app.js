(function(){
'use strict';

var tech = new TechnologyViewModel();
var occ = new OccupationViewModel();
var det = new DetailViewModel();
var edu = new EducationViewModel();
var cont = new ContactViewModel();
var proj = new ProjectViewModel();


ko.applyBindings(tech, document.getElementById('technology'));
ko.applyBindings(occ, document.getElementById('occupation'));
ko.applyBindings(det, document.getElementById('user'));
ko.applyBindings(edu, document.getElementById('education'));
ko.applyBindings(cont, document.getElementById('contact'));
ko.applyBindings(proj, document.getElementById('projects'));

})();