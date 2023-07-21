import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesList from 'shared/component/MoviesList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getSearchMovies } from 'shared/api/posts';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getSearchMovies(search);

        if (data.total_results === 0) {
          toast.warn(
            <h2>
              "Please enter a valid name or your search did not return any
              results"
            </h2>,
            {
              position: 'top-center',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            }
          );
        }
        setState(prevState => ({
          ...prevState,
          items: data.results,
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (search) {
      fetchMovie();
    }
  }, [search]);
  const changeSearch = ({ search }) => setSearchParams({ search });

  const { items } = state;

  return (
    <div>
      <SearchForm onSubmit={changeSearch} />

      <MoviesList items={items} />
      <ToastContainer />
    </div>
  );
};

export default MoviesSearch;
