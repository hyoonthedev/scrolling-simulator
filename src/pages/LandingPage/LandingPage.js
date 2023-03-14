import './LandingPage.scss';

// Images
import gaiaCape from '../../assets/Images/gaia-cape.png';
import spectrumGoggle from '../../assets/Images/spectrum-goggle.png';
import elementPierce from '../../assets/Images/element-pierce.png';
import bwg from '../../assets/Images/bwg.png';
import faceStomper from '../../assets/Images/face-stomper.png';

import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    return(
        <section className="landing">
            <h4 className="landing__title">Select Item to Scroll!</h4>
            <div className="landing__options">
                <img onClick={() => navigate('/')} className="landing__image" src={gaiaCape} alt="Pink Gaia Cape"/>
                <img onClick={() => navigate('/')} className="landing__image" src={spectrumGoggle} alt="Spectrum Goggle"/>
                <img onClick={() => navigate('/')} className="landing__image" src={elementPierce} alt="Element Pierece"/>
                <img onClick={() => navigate('/')} className="landing__image" src={bwg} alt="Brown Work Glove"/>
                <img onClick={() => navigate('/')} className="landing__image" src={faceStomper} alt="Face Stomper"/>
            </div>
        </section>
        
    )
}

export default LandingPage;