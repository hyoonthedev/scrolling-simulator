import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
// import LandingPage from './pages/LandingPage/LandingPage';
import ChaosScrolling from './pages/LandingPage/ChaosScrolling/ChaosScrolling';

// Components
import MainTitle from './components/MainTitle/MainTitle';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainTitle/>
        <div className="main-container">
          <Routes>
            {/* <Route path="/" element={<LandingPage/>}/> */}
            <Route path="/" element={<ChaosScrolling/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
