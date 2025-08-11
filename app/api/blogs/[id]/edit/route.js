import Blog from "@/models/Blog";
import db_connect from "@/utils/dbConnect";

db_connect();

export const POST = async (request, {params}) => {
    const id = params.id;
    console.log("EDit blog id: ", id);
    try{
        const {title, content, category} = await request.json();
        const blog = await Blog.findById(id);
        if(blog){
            const updatedBlog = await Blog.findByIdAndUpdate(id, {title, content, category}, {new: true});
            return new Response(JSON.stringify(updatedBlog), {status: 200});
        }
        else{
            return new Response("Blog not found", {status: 404});
        }
    }
    catch(err){
            return new Response("Internal Server Error", {status: 500});
    }
}