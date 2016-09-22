/**
 * @class Education
 * @param school
 * @param qualification
 * @param year
 */
function Education(school, qualification, year)
{
    var self = this;

    self.school = school;
    self.qualification = qualification;
    self.year = year;
}

var education1 = new Education('Oude Molen THS', 'National Senior Certificate', 2009);
var education2 = new Education('Cape Peninsula University of Technology', 'NDip IT', 2012);
var education3 = new Education('Cape Peninsula University of Technology', 'BTech IT', 2014);
var education4 = new Education('NetIQ', 'Identity Manager 4', 2015);
var education5 = new Education('UC San Diego', 'Learning How to Learn', 2016);
var education6 = new Education('Udacity', 'Front End Developer Nano Degree', 2016);

var allEducation = [education1, education2, education3, education4, education5 , education6];