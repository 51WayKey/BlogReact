import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBlogPost = () => {
  const { postId } = useParams();
  const [postInfo, setpostInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()).then(data =>{console.log(data);setpostInfo(data)})
      .catch(error => console.error("détails de l'erreur", error));}, [postId]);

    

  return (
    <div>
      <h1>Edit Blog Post</h1>
      {postInfo && (
        <div> <p>Id: {postInfo.id}</p> <p>Titre: {postInfo.title}</p> <p>Contenu: {postInfo.body}</p> </div>)}
    </div>
  );
};

export default EditBlogPost;

