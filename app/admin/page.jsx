'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const AdminPage = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDeleteBlog = async (id) => {
    try{
      const res =  await  axios.post("http://localhost:3000/api/blogs/" + id + "/delete")
    if(res.status == 200){
        // Remove the deleted blog from the state
        setBlogs(blogs.filter(blog => blog._id !== id));
        alert("Blog deleted successfully");
    }
    }
    catch(err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog. Please try again.");
    }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/blogs");
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return (
      <div className="p-4 text-center text-gray-600">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin - Manage Blogs</h1>

      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
        >
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-700 mt-2">{blog.content.substring(0,100)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Category: <span className="font-medium">{blog.category}</span>
          </p>
          <div className="mt-4 flex gap-3">
            <Link href = {"/admin/edit/" + blog._id}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit
            </button>
            </Link>
            
                <button onClick = {() => handleDeleteBlog(blog._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
                </button>
            
                
            
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
