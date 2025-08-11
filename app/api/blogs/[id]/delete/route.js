import Blog from "@/models/Blog";
import db_connect from "@/utils/dbConnect";

db_connect();

export const POST = async (request, { params }) => {
    const {id} = params;
    try{
        // Find the blog by id and delete it
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if(deletedBlog){
            return new Response("Blog Deleted Successfully", {status: 200});
        }
        else{
            return new Response("Blog not found", {status: 404});
        }
    }
    catch(err){
        console.log(err);
        return new Response("Internal Server Error", {status: 500})
    }
}