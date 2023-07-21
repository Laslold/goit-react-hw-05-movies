import { Link, useLocation } from 'react-router-dom';
import { MoviesListS, MoviesListItm } from './MoviesList.styled';
import PropTypes from 'prop-types';
import noPoster from '../../images/NoImagesPoster.jpg';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, original_name, backdrop_path }) => {
    const capImg = backdrop_path
      ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
      : `${noPoster}`;

    const selecterName = title ? title : original_name;
    return (
      <MoviesListS key={id}>
        <Link className="box" to={`/movies/${id}`} state={{ from: location }}>
          <img src={capImg} alt={title} width="350" height="200" />
          {selecterName}
        </Link>
      </MoviesListS>
    );
  });
  return <MoviesListItm>{elements}</MoviesListItm>;
};

MoviesList.defaultProps = {
  items: [],
};
MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      original_name: PropTypes.string,
      backdrop_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default MoviesList;
