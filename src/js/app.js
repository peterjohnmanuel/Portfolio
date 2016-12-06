(function(){
'use strict';

var det = new DetailViewModel();
var cont = new ContactViewModel();
var proj = new ProjectViewModel();


ko.applyBindings(det, document.getElementById('user'));
ko.applyBindings(cont, document.getElementById('contact'));
ko.applyBindings(proj, document.getElementById('projects'));

})();