import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [ispending, setIspending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIspending(true);
        const blog = { title, body, author };
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog added');
                setIspending(false);
                navigate('/');
            })
    }

    return (
        <div className='create'>
            <h2>Create Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Author:</label>
                <select required value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Saving...</button>}
            </form>

        </div>
    )
}

export default Create