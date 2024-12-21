import mongoose, { Schema } from "mongoose";

type Comment = {
    user: string;
    comment: string;
    time: Date;
};

type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    comments: Comment[]; // array for comments
};

const commentSchema = new Schema<Comment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false, default: Date.now }, // Default to the current date
});

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: [commentSchema], required: false }, // Nested comments schema
});

// Defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;