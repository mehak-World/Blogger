const { default: Navbar } = require("@/components/Navbar");


const BlogLayout = ({ children }) => {
    return (
        <div className="blog-layout">
           <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}

export default BlogLayout;