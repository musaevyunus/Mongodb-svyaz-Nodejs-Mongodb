const Student = require("../models/Student.model");

module.exports.studentsController = {
  addStudent: (req, res) => {
    Student.create({
      name: "Муса",
      phone: "9284771771",
      age: 19, // возраст
    }).then(() => {
      res.json("Студент добавлен");
    });
  },

  deleteStudent: (req, res) => {
    Student.findByIdAndRemove().then(() => {
      res.json("Студент удален");
    });
  },
  getStudent: (req, res) => {
    Student.find().then(() => {
      res.json("Студент возвращен");
    });
  },

  patchStudent: (req, res) => {
    Student.findByIdAndUpdate().then(() => {
      res.json("Студент изменен");
    });
  },
};
