import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title,setTitle] =  useState('title');
  const [blog,setBlog] = useState('blog content');
  const [author,setAuthor] = useState('mario');
  const [isPending,setIsPending] = useState(false);
  const history = useHistory();

  const submitBlog = (e) => {

    e.preventDefault();

    const blogDetails = { title , blog , author }  ;
    setIsPending(true);

    fetch('http://localhost:8000/blogs',{

      method:'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(blogDetails)
    }).then(() => {

      console.log("blog added");
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    })

   
  }

  return (
    <div className='create'>
      <h2>Add New Blog</h2>
      <form onSubmit={submitBlog}>
        <label>Blog Title:</label>
        <input  
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />

         <label>Blog Body:</label>
        <textarea
        required
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
        />

        <label>Blog Author:</label>
        <select value={author}
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Loading</button>}
        
      </form>
      
      
      

    </div>
  )
}

export default Create
