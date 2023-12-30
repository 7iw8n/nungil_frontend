import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMapPage from './pages/CreateMapPage';
import QuizPage from './pages/QuizPage';
import LandingPage from './pages/LandingPage';

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/createMap" element={<CreateMapPage />} />
          <Route path="/:userId" element={<Home />} />
          <Route path="/:userId/quiz/:placeId" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
