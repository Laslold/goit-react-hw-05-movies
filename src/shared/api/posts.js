import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '75dd04a97c60c40a286be550650d2cae',
  },
});
export const getMovies = async (_page = 1) => {
  const { data } = await instance.get('/trending/all/day', {
    params: {
      _page,
    },
  });
  return data;
};
export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const getSearchMovies = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: { query },
  });

  return data;
};
export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
};
export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data;
};
export const getBackdrop = async id => {
  const { data } = await instance.get(`/movie/${id}/images`);

  return data;
};
