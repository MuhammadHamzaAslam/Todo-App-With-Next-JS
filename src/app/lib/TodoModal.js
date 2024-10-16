const { Schema, default: mongoose } = require("mongoose");

const TodoSchema = new Schema({
  task: String,
  isCompleted: Boolean,
});
export const TodoModal = mongoose.models.todos || mongoose.model("todos", TodoSchema);
