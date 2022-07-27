import React from 'react';
import { Link } from 'react-router-dom';


function BlogList({ blogs, title }) {
    const handleDelete = (id) => {
        console.log("delete:", id);
    }

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>{blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>

    )
}

export default BlogList;