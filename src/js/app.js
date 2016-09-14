(function(){
'use strict';

var tech = new TechnologyViewModel();
var occ = new OccupationViewModel();
var det = new DetailViewModel();

ko.applyBindings(tech, document.getElementById('technology'));
ko.applyBindings(occ, document.getElementById('occupation'));
ko.applyBindings(det, document.getElementById('user'));


})();