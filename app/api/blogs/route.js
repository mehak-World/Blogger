import Blog from "@/models/Blog";
import db_connect from "@/utils/dbConnect";

db_connect();

export const GET = async () => {
      try{
        const blogs = await Blog.find({});
        return new Response(JSON.stringify(blogs), { status: 200 });
      }  
      catch(err){
        console.log(err);
        return new Response("Internal Server Error", { status: 500 });
      }
}

export const POST = async (request) => {
    try{
        const {title, content, category} = await request.json();
        console.log(title, content, category);
        // Save the blog to the database
        const newBlog = new Blog({title, content, category})
        await newBlog.save();
        return new Response("Blog created successfully", { status: 200 });
    }
    catch(err){
        console.log(err);
        return new Response("Internal Server Error", { status: 500 });
    }
}

