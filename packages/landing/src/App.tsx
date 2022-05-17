import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Album from '../components/Album';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Album />} />
    </Routes>
  );
}

export default App;
