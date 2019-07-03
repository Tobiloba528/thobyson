const contacts = [
    {
        name: "Omitomo",
        email: "kierah3942@gmail.com",
        message: "I want a website"
    }
]

export function saveContact(contact){
    let contactInDb = {};
    contactInDb.name = contact.name;
    contactInDb.email = contact.email;
    contactInDb.message = contact.message;

    if(!contactInDb._id){
        contactInDb._id = Math.floor(Math.random() * 100);
        contacts.push(contactInDb);
    }
}