import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true },
);

export const ProjectModel = mongoose.model("Project", projectSchema);
