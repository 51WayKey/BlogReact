import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/style.css';

const BoutonEdit = ({ idPostBlog, onEdit }) => {

  const handleEdit = () => {
      onEdit(idPostBlog);
    };
  return (
    <button onClick={handleEdit} className="button is-info is-light is-small">
      <Link to={`/blogpost/editblogpost/${idPostBlog}`}>Edit</Link>
    </button>
  );
};

export default BoutonEdit;