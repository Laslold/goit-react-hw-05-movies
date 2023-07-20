import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const MoviesPage = lazy(() => import('../pages/Movies'));
const NotPage = lazy(() => import('../pages/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
const BackdropsPage = lazy(() => import('../pages/Backdrops'));

const HomePage = lazy(() => import('../pages/HomePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback="...Loading">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="backdrop" element={<BackdropsPage />} />
        </Route>

        <Route path="*" element={<NotPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
