import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMapPage from './pages/CreateMapPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createMap" element={<CreateMapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
