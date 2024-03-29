import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from '../styles/style.css';
const EditBlogPost = () => {
  const { postId } = useParams();
  const [postInfo, setpostInfo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()).then(data => setpostInfo(data))
      .catch(error => console.error("détails de l'erreur", error));
  }, [postId]);

  return (
    <div>
      <h1 className='title is-4'>Edit BlogPost</h1>
      {postInfo && (
        <div className='box block cell m-4'> <p className='subtitle is-6'><em>Id: {postInfo.id}</em></p> <h2 className='title is-6'>Titre: {postInfo.title}</h2> <p className='block'>Contenu: {postInfo.body}</p> </div>)}
    </div>
  );
};

export default EditBlogPost;

