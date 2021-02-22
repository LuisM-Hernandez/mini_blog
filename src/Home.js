// useState - Is a hook that makes a reactive value and provides us with a way to change that value whenever we want
import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Ganon', id: 1 },
        { title: 'Learning React', body: 'lorem ipsum...', author: 'Sara', id: 2 },
        { title: 'Watching Videos', body: 'lorem ipsum...', author: 'Ganon', id: 3 }

    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return (  
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           {/* Filtering blogs by specific author */}
           {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Ganon')} title="Ganon's Blogs!" /> */}
        </div>
    );
}
 
export default Home;