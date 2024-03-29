import React from 'react';
import style from '../styles/style.css';
const BoutonDelete = ({ idPostBlog, onDelete }) => {


  const handleDelete = () => {
    onDelete(idPostBlog);
  };


  return (
    <button onClick={handleDelete} className="button is-danger is-light is-small">Delete</button>
  );
};

export default BoutonDelete;