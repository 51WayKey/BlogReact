import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BoutonEdit from '../components/BoutonEdit';
import BoutonDelete from '../components/BoutonDelete';

function HomePage() {

  return (
    <div>BlogPost
    <Link className='blogpost' to='blogpost'>Voir Les Posts</Link>
    </div>
    );
  };
























  //   useEffect(() => {
//     // @TODO - fetching post blogs from the server...
//     //
//     // @HINT - once we got the data, it's maybe time to provoke a rerender...
//   });
//   // pay attention on how to use carefully useEffect, don't hesitate to log !

//   return (
//     <>
//       <h1>Blog posts</h1>
//       <p>...</p>
//     </>
//   );
// }

export default HomePage;
