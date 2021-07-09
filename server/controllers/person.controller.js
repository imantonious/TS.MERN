const Person = require("../models/person.model");

module.exports.index = (_request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.getAllPeople = (_request, response) => {
  Person.find({})
    .then((persons) => response.json(persons))
    .catch((err) => response.json(err));
};

module.exports.getPerson = (request, response) => {
  Person.findOne({ _id: request.params.id })
    .then((res) => response.json(res))
    .catch((err) => response.json(err));
};
