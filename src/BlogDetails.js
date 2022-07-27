import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';


function BlogDetails() {
    const { id } = useParams();
    const { data: blog, ispending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            console.log('blog is deleted.');
            navigate('/home');
        })
    }

    return (
        <div className='blog-details'>
            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            }
            <button onClick={handleDelete}>Delete</button>

        </div>

    )
}

export default BlogDetails;