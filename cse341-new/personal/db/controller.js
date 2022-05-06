const db = require("./connection");
const contact = db.contacts;

exports.create = (req, res) => {
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    });

    contact
        .save(contact)
        .then(data => {
            res.send(data);
            console.log("contact created!")
        });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
