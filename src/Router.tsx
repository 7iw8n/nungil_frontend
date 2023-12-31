import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Map from './pages/Map';
import Phrase from './pages/Phrase';
import PlaceName from './pages/PlaceName';
import QuizA from './pages/QuizA';
import QuizQ from './pages/QuizQ';
import MainPage from './pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Map" element={<Map />}></Route>
        <Route path="/Phrase" element={<Phrase />}></Route>
        <Route path="/PlaceName" element={<PlaceName />}></Route>
        <Route path="/QuizA" element={<QuizA />}></Route>
        <Route path="/QuizQ" element={<QuizQ />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
