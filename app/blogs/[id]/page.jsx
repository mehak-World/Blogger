import axios from "axios";

const BlogById = async ({ params }) => {
  // Fetch the blog data by ID from the database
  const res = await axios.get(`http://localhost:3000/api/blogs/${params.id}`);
  const blog = res.data;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">{blog?.title}</h1>
      {blog?.category && (
        <p className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
          {blog.category}
        </p>
      )}
      <div className="prose prose-lg text-gray-700 whitespace-pre-line">{blog?.content}</div>
    </div>
  );
};

export default BlogById;
