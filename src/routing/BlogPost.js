import React from 'react'
import {  useState, useEffect } from 'react';
import BoutonEdit from '../components/BoutonEdit';
import BoutonDelete from '../components/BoutonDelete';
import style from '../styles/style.css';


function BlogPost() {
    const [posts, setPosts] = useState([]);

    const handleDelete = (postIdToDelete) => {
    console.log("supression du post id:", postIdToDelete);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => setPosts(data))
    .catch(error => console.error("détails de l'erreur", error));}, []);


  return (
    <div>
    <div className='fixed-grid has-4-cols-desktop'>
    <h1 className='title block'>Blog de Posts</h1>
    <ul className='grid '>
      {posts.map(post => (
        <li key={post.id} className='cell box m-4'>
          <h2 className='title is-5 has-text-grey-dark'>{post.title}</h2><BoutonEdit idPostBlog={post.id}/><BoutonDelete idPostBlog={post.id} onDelete={handleDelete}/>
        </li>
      ))}
    </ul>
  </div>
    
    </div>
  )
}

export default BlogPost