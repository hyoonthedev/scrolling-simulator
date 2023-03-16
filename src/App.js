import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages
import LandingPage from './pages/LandingPage/LandingPage';
import Facestomper from './pages/Facestomper/Facestomper';
import PinkGaiaCape from './pages/PinkGaiaCape/PinkGaiaCape';

// Components
import MainTitle from './components/MainTitle/MainTitle';
import ScrollStats from './components/ScrollStats/ScrollStats';

function App() {

// Stats Counter
  const [passRateCount, setPassRateCount] = useState(0);
  const [failRateCount, setFailRateCount] = useState(0);
  const [totalScrollCount, setTotalScrollCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);

// Stat Randomizer 
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * ((max +1) - min) ) + min;
}

// Scroll Success and Fail Messages
const successMessage = "The scroll lights up, and then its mysterious power has been transfered to the item."
const failMessage = "The scroll lights up, but the item winds up as if nothing happened."
const failWhiteScrollMessage = "The item upgrade failed, but since the White Scroll was used the number of item upgrade slots remain in tact."
const noSlotsMessage = "No more available slots!"

  return (
    <>
      <BrowserRouter>
        <MainTitle/>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route 
              path="/facestomper" 
              element={<Facestomper
                passRateCount = {passRateCount}
                setPassRateCount = {setPassRateCount}
                failRateCount = {failRateCount}
                setFailRateCount = {setFailRateCount}
                totalScrollCount = {totalScrollCount}
                setTotalScrollCount = {setTotalScrollCount}
                resetCount = {resetCount}
                setResetCount = {setResetCount}
                getRndInteger = {getRndInteger}
                successMessage = {successMessage}
                failMessage = {failMessage}
                failWhiteScrollMessage = {failWhiteScrollMessage}
                noSlotsMessage = {noSlotsMessage}
                />}
            />
            <Route
              path="/pink-gaia-cape"
              element={<PinkGaiaCape
                passRateCount = {passRateCount}
                setPassRateCount = {setPassRateCount}
                failRateCount = {failRateCount}
                setFailRateCount = {setFailRateCount}
                totalScrollCount = {totalScrollCount}
                setTotalScrollCount = {setTotalScrollCount}
                resetCount = {resetCount}
                setResetCount = {setResetCount}
                getRndInteger = {getRndInteger}
                successMessage = {successMessage}
                failMessage = {failMessage}
                failWhiteScrollMessage = {failWhiteScrollMessage}
                noSlotsMessage = {noSlotsMessage}
                />}
            />
          </Routes>
        </div>
        <ScrollStats
        passRateCount = {passRateCount}
        totalScrollCount = {totalScrollCount}
        resetCount = {resetCount}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
