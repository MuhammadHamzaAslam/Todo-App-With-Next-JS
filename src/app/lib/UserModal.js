const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  fullName: { type: String, unique: true },
  email: String,
});

if (mongoose.model.Users) {
  mongoose.model.Users.schema = userSchema;
}

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
