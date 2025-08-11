'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {useState, useEffect} from "react";

const EditBlogPage = () => {
    const {id} = useParams(); // Get the blog id from the URL
    const router = useRouter(); // Router to navigate after editing

    // Sttates for form fields
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const editBlog = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/api/blogs/" + id + "/edit", {title, content, category});
            if(response.status == 200){
                // Move to the admin page
                router.push("/admin");
            }
        }
        catch(err){
            console.error("Error editing blog:", err);
            alert("Failed to edit blog. Please try again.");
        }
    }

     
    useEffect(() => {
        // Fetch the blog data using the id
        const fetchBlog = async () => {
            const response = await axios.get("http://localhost:3000/api/blogs/" + id);
            console.log(response.data);
            if(response.data){
                setTitle(response.data.title);
                setContent(response.data.content);
                setCategory(response.data.category);
            }
        }

        fetchBlog();
    }, [id])
    
    return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl">Edit Blog</h1>
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
          onClick = {editBlog}
        >
          Edit Blog
        </button>
      </form>
    </div>
  );
}

export default EditBlogPage;