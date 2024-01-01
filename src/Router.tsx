import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMapPage from './pages/CreateMapPage';
import QuizPage from './pages/QuizPage';
// import LandingPage from './pages/LandingPage';
import Map from './pages/Map';
import Phrase from './pages/Phrase';
import PlaceName from './pages/PlaceName';
import QuizA from './pages/QuizA';
import QuizQ from './pages/QuizQ';
import MainPage from './pages/MainPage';
import Nickname from './pages/Nickname';

const Router = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/Phrase" element={<Phrase />}></Route>
          <Route path="/PlaceName" element={<PlaceName />}></Route>
          <Route path="/QuizA" element={<QuizA />}></Route>
          <Route path="/QuizQ" element={<QuizQ />}></Route>
          <Route path="/Nickname" element={<Nickname />}></Route>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/createMap" element={<CreateMapPage />} />
          <Route path="/:userId" element={<Home />} />
          <Route path="/:userId/quiz/:placeId" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
