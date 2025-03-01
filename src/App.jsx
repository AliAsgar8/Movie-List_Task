import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Popular from './Pages/Popular';
import TopRelated from './Pages/TopRelated';
import Upcoming from './Pages/Upcoming';
import MovieDetailPage from './Component/MovieDetailPage';
import SearchPage from './Component/SearchPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/toprated" element={<TopRelated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path='/movie/:id' element={<MovieDetailPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
