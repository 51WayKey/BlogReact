import React from 'react';
import { Link } from 'react-router-dom';

const BoutonEdit = ({ idPostBlog }) => {
  return (
    <button>
      <Link to={`/blogpost/editblogpost/${idPostBlog}`}>Edit</Link>
    </button>
  );
};

export default BoutonEdit;