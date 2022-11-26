import BlogRow from "./blog_row"
import blogs from "../../blogPosts/title/blogs";

function BlogList() {
    return (
        <div>
            {blogs.map((blog) =>
                <BlogRow key={blog.title} blog={blog}  />
)}
        </div>
    )
}

export default BlogList