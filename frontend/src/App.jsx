import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicSearchApp from './MusicSearchApp';
import CategoryPage from './CategoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicSearchApp />} />
        <Route path="/category/:genre" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
