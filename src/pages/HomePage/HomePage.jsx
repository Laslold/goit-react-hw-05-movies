import React from 'react';
import Movies from 'modules/Movies';

const HomePage = () => {
  return (
    <main>
      <h2>Trending today</h2>
      <Movies />
    </main>
  );
};

export default HomePage;
