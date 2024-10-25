const { Schema, default: mongoose } = require("mongoose");

const TodoSchema = new Schema({
  task: String,
  isCompleted: Boolean,
  user : {type : mongoose.Types.ObjectId , ref : "users"}
});
export const TodoModal = mongoose.models.todos || mongoose.model("todos", TodoSchema);
