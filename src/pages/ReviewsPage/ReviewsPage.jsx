import { useEffect, useState } from 'react';
import { getReviews } from '../../shared/api/posts';
import { useParams } from 'react-router-dom';
import { ReviewPageS } from './ReviewsPage.styled';

const ReviewsPage = () => {
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
        const data = await getReviews(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    if (id) {
      fetchMovies();
    }
  }, [id]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, author, content, result }) => {
    return (
      <ReviewPageS key={id}>
        <h3>{`Author: ${author} `}</h3>
        <p>{content}</p>
      </ReviewPageS>
    );
  });

  return (
    <div>
      <h2>Reviews</h2>
      {error && <p>We are sorry, a server error occurred</p>}
      {loading && <p>loading...</p>}
      {elements.length > 0 ? <ul>{elements}</ul> : <p>no found Reviews</p>}
    </div>
  );
};

export default ReviewsPage;
