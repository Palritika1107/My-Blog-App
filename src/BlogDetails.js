import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    const {id} =  useParams(); 
    const {data:blog , isPending , error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = () => {
    
      fetch('http://localhost:8000/blogs/' + blog.id ,{

      method:'DELETE'
      }).then(() => {

          history.push('/');
      })

    }

  return (
    <div class='blog-details'>
        {isPending && <div><p>Loading.....</p></div>}
        {error && <p>{error}</p>}
        {blog && <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>

        </article>}

        {/* <h2>Blog Details - {id}</h2> */}
        

    </div>
  )
}

export default BlogDetails
