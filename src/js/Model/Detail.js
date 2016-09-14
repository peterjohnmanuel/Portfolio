/** 
 * Details 
 * 
 * @class Details
 * @param name
 * @param surname
 * @param designation
 * @param location
 * @param profilePicture
 *  
 **/
function Detail(name, surname, designation, location, profilePicture) {
    var self = this;
    
    self.name = name;
    self.surname = surname;
    self.designation = designation;
    self.location = location;
    self.profilePicture = profilePicture;
}

var personalDetails = new Detail("Peter John", "Manuel", "Developer", "Cape Town, RSA", "img/fry-Logo.jpg");