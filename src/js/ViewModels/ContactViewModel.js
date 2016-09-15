/**
 * Holds all contact information
 * @class ContactViewModel
 */

function ContactViewModel(){

    var self = this;

    self.name = ko.observableArray(contacts);
}