import './ChaosSelection.scss';

// Images
import gaiaCape from '../../assets/Images/Items/gaia-cape.png';
import spectrumGoggle from '../../assets/Images/Items/spectrum-goggle.png';
import elementPierce from '../../assets/Images/Items/element-pierce.png';
import bwg from '../../assets/Images/Items/bwg.png';
import faceStomper from '../../assets/Images/Items/face-stomper.png';
import markOfNaricain from '../../assets/Images/Items/mark-of-naricain.png';

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
        <section className="chaos-selection">
            <h4 className="chaos-selection__title">Select Item to Scroll!</h4>
            <div className="chaos-selection__options">
                <img onClick={() => handleClick("pink gaia cape")} className={selected === "pink gaia cape" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={gaiaCape} alt="Pink Gaia Cape"/>
                <img onClick={() => handleClick("spectrum goggle")} className={selected === "spectrum goggle" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={spectrumGoggle} alt="Spectrum Goggle"/>
                <img onClick={() => handleClick("element pierce")} className={selected === "element pierce" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={elementPierce} alt="Element Pierece"/>
                <img onClick={() => handleClick("brown work glove")} className={selected === "brown work glove" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={bwg} alt="Brown Work Glove"/>
                <img onClick={() => handleClick("facestomper")} className={selected === "facestomper" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={faceStomper} alt="Face Stomper"/>
                <img onClick={() => handleClick("mark of naricain")} className={selected === "mark of naricain" ? "chaos-selection__image" : "chaos-selection__image-grey"} src={markOfNaricain} alt="Mark of Naricain"/>
            </div>
            <h4 className={selected === "unavailable" ? "chaos-selection__selected-unavailable" : "chaos-selection__selected"} >{selected}</h4>
            <div className="chaos-selection__button-contain">
                <div onClick={() => navigate("/mode")} className="chaos-selection__button">Mode Select</div>
                <div onClick={() => navigate(`/${selectedLink}`)} className={selected === null ? "chaos-selection__hidden" : "chaos-selection__button"}>Lets go!</div>
            </div>
        </section>
    )
}

export default LandingPage;