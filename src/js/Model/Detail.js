/** 
 * Details 
 * 
 * @class Details
 * @param name
 * @param surname
 * @param designation
 * @param location
 *  
 **/
function Detail(name, surname, designation, location) {
    var self = this;
    
    self.name = name;
    self.surname = surname;
    self.designation = designation;
    self.location = location;
}

var personalDetails = new Detail("Peter John", "Manuel", "Software Developer", "Cape Town, RSA");