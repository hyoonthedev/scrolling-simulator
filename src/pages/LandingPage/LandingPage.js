import './LandingPage.scss';

// Images
import gaiaCape from '../../assets/Images/gaia-cape.png';
import spectrumGoggle from '../../assets/Images/spectrum-goggle.png';
import elementPierce from '../../assets/Images/Items/element-pierce.png';
import bwg from '../../assets/Images/bwg.png';
import faceStomper from '../../assets/Images/face-stomper.png';
import markOfNaricain from '../../assets/Images/mark-of-naricain.png';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LandingPage() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(null)
    const [selectedLink, setSelectedLink] = useState(null)

    const convertLink = (item) => {
        return(item.split(' ').join('-'))
    }
    const handleClick = (event) => {
        setSelected(event)
        setSelectedLink(convertLink(event))
    }

    return(
        <section className="landing">
            <h4 className="landing__title">Select Item to Scroll!</h4>
            <div className="landing__options">
                <img onClick={() => handleClick("pink gaia cape")} className="landing__image" src={gaiaCape} alt="Pink Gaia Cape"/>
                <img onClick={() => handleClick("spectrum goggle")} className="landing__image" src={spectrumGoggle} alt="Spectrum Goggle"/>
                <img onClick={() => handleClick("element pierce")} className="landing__image" src={elementPierce} alt="Element Pierece"/>
                <img onClick={() => handleClick("brown work glove")} className="landing__image" src={bwg} alt="Brown Work Glove"/>
                <img onClick={() => handleClick("facestomper")} className="landing__image" src={faceStomper} alt="Face Stomper"/>
                <img onClick={() => handleClick("mark of naricain")} className="landing__image" src={markOfNaricain} alt="Mark of Naricain"/>
            </div>
            <h4 className="landing__selected">{selected}</h4>
            <div onClick={() => navigate(`/${selectedLink}`)} className={selected === null ? "landing__hidden" : "landing__start" }>Lets go!</div>
        </section>
    )
}

export default LandingPage;