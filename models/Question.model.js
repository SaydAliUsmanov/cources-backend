const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    answerOptions: [
      {
        text: {
          type: String,
        },
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
