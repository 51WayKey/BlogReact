import React from 'react'
import {  useState, useEffect } from 'react';
import BoutonEdit from '../components/BoutonEdit';
import BoutonDelete from '../components/BoutonDelete';


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
    <div>
    <h1>Blog de Posts</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}<BoutonEdit idPostBlog={post.id}/><BoutonDelete idPostBlog={post.id} onDelete={handleDelete}/>
        </li>
      ))}
    </ul>
  </div>
    
    </div>
  )
}

export default BlogPost