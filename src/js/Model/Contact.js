/** Contact 
 * @class Contact
 * @param contactType
 * @param contactDetails
 * @param contactIcon
*/
function Contact(contactType, contactDetails ,contactIcon, isHyperlink){
    var self = this;

    self.contactType = contactType;
    self.contactDetails = contactDetails;
    self.contactIcon = contactIcon;
    self.isHyperlink = isHyperlink;
}
var contact1 = new Contact('Yahoo', 'peterjohn.manuel@yahoo.com', 'fa-yahoo', false);
var contact2 = new Contact('Skype', 'peterjohn.manuel', 'fa-skype', false);
var contact3 = new Contact('Github', 'https://github.com/peterjohnmanuel', 'fa-github', true);
var contact4 = new Contact('Location', 'Cape Town, RSA', 'fa-map-o', false);
var contact5 = new Contact('Resume', 'http://manueloverride.ddns.net:8090/Resume', 'fa-briefcase', true);

var contacts = [contact1,contact2, contact3, contact4, contact5];