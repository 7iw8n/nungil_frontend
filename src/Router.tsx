import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMapPage from './pages/CreateMapPage';
import QuizPage from './pages/QuizPage';
import LandingPage from './pages/LandingPage';
import Map from './pages/Map';
import Phrase from './pages/Phrase';
import PlaceName from './pages/PlaceName';
import QuizA from './pages/QuizA';
import QuizQ from './pages/QuizQ';
import MainPage from './pages/MainPage';
import PlaceProvider from './pages/PlaceProvider';

const Router = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: '360px',
      }}
    >
      <div
        css={{
          position: 'relative',
          width: '100vw',
          maxWidth: '450px',
          height: '100vh',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Map" element={<Map />}></Route>
            <Route path="/Phrase" element={<Phrase />}></Route>
            <Route path="/PlaceName" element={<PlaceName />}></Route>
            <Route path="/QuizA" element={<QuizA />}></Route>
            <Route path="/QuizQ" element={<QuizQ />}></Route>
            <Route path="/PlaceProvider" element={<PlaceProvider />}></Route>
            <Route path="/:userId" element={<MainPage />}></Route>
            <Route path="/createMap" element={<CreateMapPage />} />
            {/* <Route path="/:userId" element={<Home />} /> */}
            <Route path="/:userId/quiz/:placeId" element={<QuizPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Router;
