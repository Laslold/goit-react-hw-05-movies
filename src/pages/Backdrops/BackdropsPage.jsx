import React from 'react';
import { useEffect, useState } from 'react';
import { getBackdrop } from '../../shared/api/posts';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackdropS, CastPageItms } from './Backdrop.styled';
import noPoster from '../../images/NoImagesPoster.jpg';
const BackdropsPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));
      try {
        const data = await getBackdrop(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.backdrops,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };

    fetchMovies();
  }, [id]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, file_path }) => {
    const capImg = file_path
      ? `https://image.tmdb.org/t/p/w500${file_path}`
      : `${noPoster}`;

    return (
      <BackdropS key={id}>
        <img src={capImg} alt={file_path} width="180" height="100" />
      </BackdropS>
    );
  });

  return (
    <div>
      <h2>Backdrops</h2>
      {error && <p>We are sorry, a server error occurred</p>}
      {loading && <p>loading...</p>}
      {elements.length > 0 ? (
        <CastPageItms>{elements}</CastPageItms>
      ) : (
        <p>no found Backdrops</p>
      )}
    </div>
  );
};
BackdropsPage.propTypes = {
  items: PropTypes.object.isRequired,
  getBackdrop: PropTypes.func.isRequired,
};
export default BackdropsPage;
