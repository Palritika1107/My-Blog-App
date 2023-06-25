
import { useState , useEffect } from "react";

import Blogscomp from "./Blogscomp";
import useFetch from "./useFetch";
const Home = () => {


    const {data:blogs , isPending , err} = useFetch('http://localhost:8000/blogs')

    // const deleteBlog = (id) => {
    //     const newBlogs = blogs.filter(blog =>  blog.id !== id );

    // // setD(newBlogs);


    // }

 

    return (

        <div className="home">
        {/* console.log("hello"); */}
        {err && <p>{err}</p>}
        {isPending && <div>Pending......</div>}
        {blogs && <Blogscomp blogs={blogs} title="All Blogs:"  />}
        {/* <Blogscomp blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs:" deleteBlog={deleteBlog} /> */}
        {/* <button onClick={() => setName('luigi')}>change name</button> */}
        </div>

    );
}

export default Home;



/* <button onClick= {(e) => {
    printAgain('maria',e);
}}>Click Again</button> */