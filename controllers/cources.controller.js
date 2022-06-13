const Cource = require("../models/Cource.model");

module.exports.courcesController = {
  addCource: async (req, res) => {
    try {
      const result = await Cource.create({
        title: req.body.title,
        description: req.body.description,
        lessons: req.body.lessons,
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  createCource: async (req, res) => {
    try {
      const result = await Cource.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        $push: { lessons: req.body.lessons },
      });
      res.json(result);
    } catch (e) {
      res.json(e);
    }
  },
  deleteCource: async (req, res) => {
    try {
      await Cource.findByIdAndRemove(req.params.id);
      res.json('Успешно удалено');
    } catch (e) {
      res.json(e);
    }
  },
  getAll: async (req, res) => {
    const allLessons = await Cource.find();
    res.json(allLessons);
  },
};
