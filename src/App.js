import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovieDetails from './components/SingleMovieDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/top-rated" element={<TopRatedMovies />} />
    <Route path="/upcoming" element={<UpcomingMovies />} />
    <Route path="/movie/:id" element={<SingleMovieDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App