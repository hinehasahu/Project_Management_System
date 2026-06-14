import { ProjectModel } from "../models/projectModel.js";

export const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await ProjectModel.create({
      title,
      description,
      createdBy: req.user._id,
      updatedBy: req.user._id,
    });

    res
      .status(201)
      .json({ success: true, message: "Project created", project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find()
      .populate("createdBy")
      .populate("updatedBy");

    res
      .status(200)
      .json({ success: true, message: "Get all projects", projects });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);

    if (!project)
      return res.status(404).json({ message: "Project not found!" });

    res.status(200).json({ success: true, message: "Project found.", project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);

    if (!project)
      return res.status(404).json({ message: "Project not found!" });

    if (
      req.user.role === "manager" &&
      project.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "You can update only your own projects",
      });
    }

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedBy: req.user._id },
      {
        new: true,
      },
    );
    res
      .status(200)
      .json({ success: true, message: "Project updated.", updatedProject });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found!",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Project deleted.", project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    console.log(error);
  }
};
