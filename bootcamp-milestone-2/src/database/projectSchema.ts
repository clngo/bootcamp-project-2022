import mongoose, { Schema } from "mongoose";

// TypeScript type (can also be an interface)
type Project = {
  title: string;
  slug: string;
  date: Date;
  description: string; // For preview
  content: string; // Detailed content
  technologies: string[]; // List of technologies used
  role: string; // Role in the project
  highlights: string[]; // List of project highlights
  link?: string; // Optional link for the project
};

// Mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  technologies: { type: [String], required: true },
  role: { type: String, required: true },
  highlights: { type: [String], required: true },
  link: { type: String, required: false },
});

// Defining the collection and model
const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
