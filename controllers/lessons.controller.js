const Lesson = require("../models/Lesson.model");

module.exports.lessonsController = {
  addLesson: async (req, res) => {
    try {
      const result = await Lesson.create({
        name: req.body.name,
        description: req.body.description,
        questions: req.body.questions,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  createLesson: async (req, res) => {
    try {
      const result = await Lesson.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        $push: { questions: req.body.questions },
      });
      res.json(result);
    } catch (e) {
      res.json(e);
    }
  },
  deleteLesson: async (req, res) => {
    try {
      await Lesson.findByIdAndRemove(req.params.id);
      res.json('Успешно удалено');
    } catch (e) {
      res.json(e);
    }
  },
  getAll: async (req, res) => {
    const allLessons = await Lesson.find();
    res.json(allLessons);
  },
};
