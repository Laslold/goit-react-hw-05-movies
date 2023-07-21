import React from 'react';
import { Link } from 'react-router-dom';

import notPage from '../../images/112.png';
const NotFoundPage = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <img src={notPage} alt="not found"></img>
      <br />
      <Link to="/">To home page</Link>
    </main>
  );
};

export default NotFoundPage;
