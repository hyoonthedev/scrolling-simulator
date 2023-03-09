import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
// import LandingPage from './pages/LandingPage/LandingPage';

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
            <Route path="/" element="/"/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
