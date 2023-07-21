import React from 'react';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from 'shared/api/posts';
import MoviesList from 'shared/component/MoviesList';
const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    const fetchMovies = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getMovies();

        setState(prevState => ({
          ...prevState,
          items: [...data.results],
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error: error,
        }));
      }
    };
    fetchMovies();
  }, []);
  const { items, loading, error } = state;

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>Movies not found</p>}
      <MoviesList items={items} />
    </>
  );
};
Movies.propTypes = {
  getMovies: PropTypes.func,
  items: PropTypes.object,
};
export default Movies;
