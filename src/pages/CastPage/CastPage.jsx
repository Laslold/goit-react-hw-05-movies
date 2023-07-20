import { useEffect, useState } from 'react';
import { getCast } from 'shared/api/posts';
import { useParams } from 'react-router-dom';
import { CastPageS, CastPageItms } from './CastPage.styled';
import noFase from '../../images/NoImageFace.png';

const CastPage = () => {
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
        const data = await getCast(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.cast,
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

  const elements = items.map(({ id, name, character, profile_path }) => {
    const capImg = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : `${noFase}`;

    return (
      <CastPageS key={id}>
        <img src={capImg} alt={name} width="80" height="120" />
        <p>{name}</p>
        <p>{character}</p>
      </CastPageS>
    );
  });

  return (
    <div>
      <h2>Cast</h2>
      {error && <p>We are sorry, a server error occurred</p>}
      {loading && <p>loading...</p>}
      {elements.length > 0 ? (
        <CastPageItms>{elements}</CastPageItms>
      ) : (
        <p>no found Reviews</p>
      )}
    </div>
  );
};

export default CastPage;
