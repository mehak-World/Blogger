// This is the general card component used to display blog posts or articles.

const BlogCard = ({title, content}) => {
    return (
        <div className="blog-card w-[300px] p-5 bg-gray-50 shadow-md rounded-lg m-5">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
            <p className = "text-md text-gray-700">{content.substring(0, 100) + "..."}</p>
        </div>
    )
}

export default BlogCard;