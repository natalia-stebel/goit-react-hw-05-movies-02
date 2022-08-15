import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const Home = lazy(() => import('./views/Home'));
const Movies = lazy(() => import('./views/movies'));
const MovieDetails = lazy(() => import('./views/MovieDetails'));
const Cast = lazy(() => import('./views/Cast'));
const Reviews = lazy(() => import('./views/Cast'));
// const Loader = lazy(() => import('../components/Loader/Loader'));

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>LOADING...</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId//*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />}></Route> */}
        </Routes>
      </Suspense>
    </>
  );
}
