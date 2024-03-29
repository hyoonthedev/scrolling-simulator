import './ModeSelection.scss';

import scroll from '../../assets/Images/Items/scroll-thirty.png';
import chaosScroll from '../../assets/Images/Items/chaos-scroll.png';
import aufHavenCirclet from '../../assets/Images/Items/auf-haven-circlet.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModeSelection() {

    const [selected, setSelected] = useState(null);

    const handleSelect = (selectedMode) => {
        setSelected(selectedMode)
    }

    const navigate = useNavigate();

    const convertLink = (item) => {
        return(item.split(' ').join('-'))
    }

    return(
        <section className="mode-select">
            <h2 className="mode-select__title">Select Sim Mode</h2>
            <div className="mode-select__container">
                <img onClick={() => handleSelect("general")} className={selected === "general" ? "mode-select__image" : "mode-select__image-grey"} src={scroll} alt="30% Scroll"/>
                <img onClick={() => handleSelect("chaos")} className={selected === "chaos" ? "mode-select__image" : "mode-select__image-grey"} src={chaosScroll} alt="Chaos Scroll"/>
                <img onClick={() => handleSelect("auf haven")} className={selected === "auf haven" ? "mode-select__image" : "mode-select__image-grey"} src={aufHavenCirclet} alt="Auf Haven Circlet"/>
            </div>
            <p className={selected === null ? "mode-select__selected-hidden" : "mode-select__selected"}>{selected} Scrolling</p>
            <div onClick={() => navigate(`/${convertLink(selected)}`)} className={selected === null ? "mode-select__button-hidden" : "mode-select__button"}>Go!</div>
        </section>
    )
}

export default ModeSelection;