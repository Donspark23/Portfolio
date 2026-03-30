import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  liveLink: String,
  githubLink: String,
  image: String,
  views: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
