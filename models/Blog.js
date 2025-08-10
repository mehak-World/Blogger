import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        emum: ['Technology', 'Lifestyle', 'Travel', 'Food', 'Health']
    }
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;