import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">To home page</Link>
    </main>
  );
};

export default NotFoundPage;
