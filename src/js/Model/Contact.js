/**
 * Holds all contact information
 * @class Contact
 */

function Contact(contactDetail, contactIcon){
    var self = this;
    this.contactDetail = contactDetail;
    this.contactIcon = contactIcon;
}

var contact = new Contact("peterjohn.manuel@yahoo.com", "fa-yahoo");

var contacts = [contact];