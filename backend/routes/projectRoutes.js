import express from "express";
import Project from "../models/Project.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// CREATE PROJECT
router.post("/", protect, upload.single("image"), async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msg: "All fields required" });
  }

  const project = new Project({
    title,
    description,
    liveLink: req.body.liveLink,
    githubLink: req.body.githubLink,
    image: req.file?.filename,
  });

  await project.save();
  res.json(project);
});

// GET PROJECTS
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

// VIEW TRACKING
router.put("/:id/view", async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.views += 1;
  await project.save();
  res.json(project);
});

export default router;
