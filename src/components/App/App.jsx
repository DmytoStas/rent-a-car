import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layout';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorite from 'pages/Favorite';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
