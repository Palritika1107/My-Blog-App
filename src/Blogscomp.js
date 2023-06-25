import React from 'react';
import { Link } from 'react-router-dom';

const Blogscomp = ({blogs , title , deleteBlog}) => {

    // const blogs = props.blogs;
    // const title = props.title;
  return (

    <div className="blogs-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
  
      <div className="blog-preview" key={blog.id}>
      <Link to={`/blogs/${blog.id}`}>
      <h2>{blog.title}</h2>
      <p>by {blog.author}</p>
      </Link>
      {/* <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button> */}
      </div>  


))}
    </div>
  )
}

export default Blogscomp
