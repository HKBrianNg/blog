import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const { data: blogs, error, ispending } = useFetch('http://localhost:8000/blogs');
    return (

        <div className='home'>
            {error && <div>{error}</div>}
            {ispending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
    )
}

export default Home