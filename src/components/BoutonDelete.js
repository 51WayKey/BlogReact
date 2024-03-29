import React from 'react';
import style from '../styles/style.css';
const BoutonDelete = ({ idPostBlog, onDelete }) => {


  const handleDelete = () => {
    onDelete(idPostBlog);
    fetch("https://jsonplaceholder.typicode.com/posts")
  };


  return (
    <button onClick={handleDelete} className="button is-danger is-light is-small">Delete</button>
  );
};

export default BoutonDelete;