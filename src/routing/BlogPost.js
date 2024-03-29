import React from 'react'
import {  useState, useEffect } from 'react';
import BoutonEdit from '../components/BoutonEdit';
import BoutonDelete from '../components/BoutonDelete';


function BlogPost() {
    const [posts, setPosts] = useState([]);

    const handleDelete = (postDelete) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postDelete}`, {method: 'DELETE'}).then(() => {
      console.log("Post supprimé avec l'ID:", postDelete, "supprimer avec succès");}).catch(error => console.error('Error deleting post:', error));

  };

  const handleEdit = (postEdit) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postEdit}`, {method: 'PATCH'}).then(() => {
    console.log("Modification du post id:", postEdit);}).catch(error => console.error('Error deleting post:', error));
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
          {post.title}<BoutonEdit idPostBlog={post.id} onEdit={handleEdit}/><BoutonDelete idPostBlog={post.id} onDelete={handleDelete}/>
        </li>
      ))}
    </ul>
  </div>
    
    </div>
  )
}

export default BlogPost