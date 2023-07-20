import { MoviesDetailsS } from './MoviesDetail.styled';
import noPoster from '../../images/NoImagesPoster.jpg';
import PropTypes from 'prop-types';
const MovieDetails = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  genres,
  original_name,
  homepage,
}) => {
  const userScore = Math.round(vote_average * 10);
  const genRee = genres.map(genre => <li key={genre.id}>{genre.name}</li>);
  const selecterName = title ? title : original_name;
  const capImg = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : `${noPoster}`;

  return (
    <MoviesDetailsS>
      <h2>{selecterName}</h2>
      <div className="wraper">
        <img src={capImg} alt={selecterName} width="250" />
        <ul className="inner">
          <li>{`Relise data:   ${release_date}`}</li>
          <li>{`Score:   ${userScore}%`}</li>
          <li className="innerIn">
            {`Genres: `} {<ul className="itemsGenr">{genRee}</ul>}
          </li>
          {homepage && (
            <li>
              {`Home page:   `}
              <a href={homepage} target="_blank" rel="noreferrer">
                {homepage.slice(8)}
              </a>
            </li>
          )}
          <p className="box">{overview}</p>
        </ul>
      </div>
    </MoviesDetailsS>
  );
};
MovieDetails.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  genres: PropTypes.array,
  original_name: PropTypes.string,
  homepage: PropTypes.string,
};
export default MovieDetails;
