"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const addBlog = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/blogs", {
      title,
      content,
      category
    });
    console.log(response);
    if (response.status === 200) {
      router.push("/");
    }
  };
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl">Create a New Blog</h1>
      <form>
        <div>
          <label className="block mb-2 text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter blog title"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            placeholder="Write your blog content here"
          ></textarea>
        </div>
        <div>
          <label>Choose Category</label>
          <select 
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="ml-2 border mb-3 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select a category --</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <button
          className="bg-black text-white p-3 rounded-lg"
          onClick={addBlog}
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
