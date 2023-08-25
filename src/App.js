import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from './routes';
import { Suspense } from 'react';
import LoadingComponent from './pages/GlobalSetting/Loading/LoadingComponent';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
