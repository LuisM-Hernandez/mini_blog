const BlogList = ({ blogs, title, handleDelete}) => {
    
// The blogs in props.blogs is the variable we called on Home's BlogList
// const blogs = props.blogs;
// const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div> 
            ))}
            
        </div>
     );
}
 
export default BlogList;