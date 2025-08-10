import Blog from "@/models/Blog";
import db_connect from "@/utils/dbConnect";

db_connect();

export const GET =  async (request, { params }) => {
        const id = params.id;
        try{
            const blog = await Blog.findById(id);
            if (!blog) {
                return new Response("Blog not found", { status: 404 });
            }
            return new Response(JSON.stringify(blog), { status: 200 });
        }
        catch(err){
            console.log(err);
            return new Response("Internal Server Error", { status: 500 });
        }
}