import React from 'react';
import { Link } from 'react-router-dom';

const BoutonEdit = ({ idPostBlog, onEdit }) => {

    const handleEdit = () => {
        onEdit(idPostBlog);
      };


  return (
    <button onClick={handleEdit}>
      <Link to={`/blogpost/editblogpost/${idPostBlog}`}>Edit</Link>
    </button>
  );
};

export default BoutonEdit;