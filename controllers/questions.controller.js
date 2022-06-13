const Question = require("../models/Question.model");

module.exports.questionsController = {
  addQuestion: async (req, res) => {
    try {
      const result = await Question.create({
        name: req.body.name,
        answerOptions: req.body.answerOptions,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  createQuestion: async (req, res) => {
    try {
      const result = await Question.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        $push: { answerOptions: req.body.answerOptions, },
      });
      res.json(result);
    } catch (e) {
      res.json(e);
    }
  },
  deleteQuestion: async (req, res) => {
    try {
      await Question.findByIdAndRemove(req.params.id);
      res.json('Успешно удалено');
    } catch (e) {
      res.json(e);
    }
  },
  getAll: async (req, res) => {
    const allLessons = await Question.find();
    res.json(allLessons);
  },
};
