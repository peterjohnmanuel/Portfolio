(function(){
'use strict';

var tech = new TechnologyViewModel();
var occ = new OccupationViewModel();

ko.applyBindings(tech, document.getElementById('technology'));
ko.applyBindings(occ, document.getElementById('occupation'));

})();