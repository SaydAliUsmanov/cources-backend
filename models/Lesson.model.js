const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    questions: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Question',
      }
    ]
  },
  { timestamps: true }
);

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
