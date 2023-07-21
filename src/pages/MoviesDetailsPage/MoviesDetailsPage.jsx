import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'shared/api/posts';
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import { MoviesDetailsS } from './MoviesDetails.styled';
import MovieDetails from 'modules/MoviesDetails/MoviesDetails';

const MoviesDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const movie = await getMovieDetails(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          movie,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    fetchMovie();
  }, [id]);
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);
  const { movie, loading, error } = state;
  const isMovies = Object.keys(movie).length > 0;
  return (
    <MoviesDetailsS>
      {loading && <p>...Loading</p>}
      {error && <p>Movies not found</p>}
      {isMovies && (
        <button className="backBtn" onClick={goBack}>
          Go back
        </button>
      )}
      {isMovies && <MovieDetails {...movie} />}
      <div className="wrapper">
        {isMovies && (
          <Link state={{ from }} to={`cast`}>
            <p className="link">Cast</p>
          </Link>
        )}
        {isMovies && (
          <Link state={{ from }} to={`reviews`}>
            <p className="link">Reviews</p>
          </Link>
        )}
        {isMovies && (
          <Link state={{ from }} to={`backdrop`}>
            <p className="link">Backdrop</p>
          </Link>
        )}
      </div>
      <Outlet />
    </MoviesDetailsS>
  );
};

export default MoviesDetailsPage;
