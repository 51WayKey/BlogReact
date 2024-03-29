import React from 'react';

const BoutonDelete = ({ idPostBlog, onDelete }) => {


  const handleDelete = () => {
    onDelete(idPostBlog);
    fetch("https://jsonplaceholder.typicode.com/posts")
  };


  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default BoutonDelete;