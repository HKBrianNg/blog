import React, { useState } from 'react'

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');


    return (
        <div className='create'>
            <h2>Create Blog</h2>
            <form>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Author:</label>
                <select required value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>

        </div>
    )
}

export default Create