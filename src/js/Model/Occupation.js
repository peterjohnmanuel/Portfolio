
/**Occuption */
 function Occupation(company, position, startDate, endDate) {
    var self = this;

    self.company = company;
    self.position = position;
    self.startDate = startDate;
    self.endDate = endDate;
}

var occupation1 = new Occupation('Process Computing Technology (PCT)', 'Internship', 'July 2012', 'December 2012');
var occupation2 = new Occupation('Process Computing Technology (PCT)', 'Junior Developer ', 'July 2013', 'December 2015');
var occupation3 = new Occupation('RedPanda Software', 'Developer', 'December 2015', 'Current');

var allOccupations = [occupation3, occupation2, occupation1];