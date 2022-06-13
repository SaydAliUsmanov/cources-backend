const mongoose = require("mongoose");

const courceSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    lessons: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  { timestamps: true }
);

const Cource = mongoose.model("Cource", courceSchema);

module.exports = Cource;
