'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/Card";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const categories = ["All", "Technology", "Lifestyle", "Travel", "Food", "Health"];

  useEffect(() => {
    axios.get("http://localhost:3000/api/blogs").then(res => {
      setBlogs(res.data);
      setFilteredBlogs(res.data);
    });
  }, []);

  const filterBlogs = (category) => {
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === category));
    }
  };

  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <div className="flex gap-4 my-4 text-center justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterBlogs(category)}
              className="p-2 border-black border-1 rounded-lg hover:bg-black hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-10">
          {filteredBlogs.map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog._id}`}>
              <BlogCard title={blog.title} content={blog.content} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
