import React from 'react';

const BoutonDelete = ({ idPostBlog, onDelete }) => {


  const handleDelete = () => {
    onDelete(idPostBlog);
  };


  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default BoutonDelete;