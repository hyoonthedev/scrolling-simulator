import './AufHaven.scss';

import aufHavenCirclet from '../../assets/Images/Items/auf-haven-circlet.png';
import darkStr from '../../assets/Images/Items/auf-dark-str.png';
import darkDex from '../../assets/Images/Items/auf-dark-dex.png';
import darkInt from '../../assets/Images/Items/auf-dark-int.png';
import darkLuk from '../../assets/Images/Items/auf-dark-luk.png';
import whiteStr from '../../assets/Images/Items/auf-white-str.png';
import whiteDex from '../../assets/Images/Items/auf-white-dex.png';
import whiteInt from '../../assets/Images/Items/auf-white-int.png';
import whiteLuk from '../../assets/Images/Items/auf-white-luk.png';
import fail from '../../assets/Images/fail.gif';
import success from '../../assets/Images/success.gif';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AufHaven({ getRndInteger, successMessage, failMessage }) {

// Renders success and fail animation
    const failAnimationRender = () => {
        setTimeout(() => setScrollStatus(false), 800);
        setTimeout(() => setAnimation(null), 800);
        clearTimeout(failAnimationRender);
    }

    const successAnimationRender = () => {
        setTimeout(() => setSuccessStatus(false), 1000);
        setTimeout(() => setSuccessAnimation(null), 1000);
        clearTimeout(successAnimationRender);
    }

    const navigate = useNavigate();

    const [scrollMessage, setScrollMessage] = useState("Drag scroll over item to start");
    const [animation, setAnimation] = useState();
    const [successAnimation, setSuccessAnimation] = useState();
    const [scrollStatus, setScrollStatus] = useState(false);
    const [successStatus, setSuccessStatus] = useState(false);

    const [aufStr, setAufStr] = useState(getRndInteger(18, 22));
    const [aufDex, setAufDex] = useState(getRndInteger(18, 22));
    const [aufInt, setAufInt] = useState(getRndInteger(18, 22));
    const [aufLuk, setAufLuk] = useState(getRndInteger(18, 22));
    const [aufSlots, setAufSlots] = useState(10);
    const [aufDestroy, setAufDestroy] = useState(false);

    const [dragStatus, setDragStatus] = useState(null);

// Scrolling Logic

    const handleScroll = (scroll) => {
        const scrollChance = Math.floor(Math.random() * 11);
        const destroyChance = Math.floor(Math.random() * 11);

        if(scroll === "dark-str") {
            if(scrollChance < 6) {
                setAufStr(aufStr + 3);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                if(destroyChance < 6) {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
                } else {
                    setAufDestroy(true);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage("Your Item has been destroyed, Click Reset for New Item")
                }
            }
        } if(scroll === "dark-dex") {
            if(scrollChance < 6) {
                setAufDex(aufDex + 3);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                if(destroyChance < 6) {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
                } else {
                    setAufDestroy(true);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage("Your Item has been destroyed, Click Reset for New Item")
                }
            }
        } if(scroll === "dark-int") {
            if(scrollChance < 6) {
                setAufInt(aufInt + 3);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                if(destroyChance < 6) {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
                } else {
                    setAufDestroy(true);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage("Your Item has been destroyed, Click Reset for New Item")
                }
            }
        } if(scroll === "dark-luk") {
            if(scrollChance < 6) {
                setAufLuk(aufLuk + 3);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                if(destroyChance < 6) {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
                } else {
                    setAufDestroy(true);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage("Your Item has been destroyed, Click Reset for New Item")
                }
            }
        } if(scroll === "white-str") {
            if(scrollChance < 6) {
                setAufStr(aufStr + 2);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
            }
        } if(scroll === "white-dex") {
            if(scrollChance < 6) {
                setAufDex(aufDex + 2);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
            }
        } if(scroll === "white-int") {
            if(scrollChance < 6) {
                setAufInt(aufInt + 2);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
            }
        } if(scroll === "white-luk") {
            if(scrollChance < 6) {
                setAufLuk(aufLuk + 2);
                setAufSlots(aufSlots - 1);
                setSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender();
                setScrollMessage(successMessage);
            } else {
                    setAufSlots(aufSlots - 1);
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failMessage);
            }
        }
    }

// Handle Drag states
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = "copyMove";
    }
    const handleDragEnd = () => {
        setDragStatus(null)
    }
    const handleDragging = (e) => {
        if(dragStatus === null) {
            setDragStatus(e.target.id)
        }
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDropped = () => {
        handleScroll(dragStatus)
    }

// Handle Reset
    const handleReset = () => {
        setAufDestroy(false);
        setAufStr(getRndInteger(18, 22));
        setAufDex(getRndInteger(18, 22));
        setAufInt(getRndInteger(18, 22));
        setAufLuk(getRndInteger(18, 22));
        setAufSlots(10);
        setScrollMessage("Drag scroll over item to start");
    }

    return(
        <section className="auf">
            <div className="auf__item-container">
                <img 
                    onDragOver={handleDragOver} 
                    onDrop={handleDropped} className={aufDestroy === true ? "auf__hidden" : "auf__item"} src={aufHavenCirclet} alt="Auf Haven Circlet"/>
                <div className={aufDestroy === true ? "auf__hidden" : "auf__stats-container"}>
                    <p className="auf__stats">Str:{aufStr}</p>
                    <p className="auf__stats">Dex:{aufDex}</p>
                    <p className="auf__stats">Int:{aufInt}</p>
                    <p className="auf__stats">Luk:{aufLuk}</p>
                    <p className="auf__stats">Slots:{aufSlots}</p>
                </div>
            </div>
            <p className="auf__message">{scrollMessage}</p>
            <div className="auf__scroll-container">
                <div className="auf__container-dark">
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="dark-str" className={dragStatus === "dark-str" ? "auf__hidden" : "auf__scroll"} src={darkStr} alt="Auf Haven Dark Scroll for Str"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="dark-dex" className={dragStatus === "dark-dex" ? "auf__hidden" : "auf__scroll"} src={darkDex} alt="Auf Haven Dark Scroll for Dex"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="dark-int" className={dragStatus === "dark-int" ? "auf__hidden" : "auf__scroll"} src={darkInt} alt="Auf Haven Dark Scroll for Int"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="dark-luk" className={dragStatus === "dark-luk" ? "auf__hidden" : "auf__scroll"} src={darkLuk} alt="Auf Haven Dark Scroll for Luk"/>
                </div>
                <div className="auf__container-white">
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="white-str" className={dragStatus === "white-str" ? "auf__hidden" : "auf__scroll"} src={whiteStr} alt="Auf Haven White Scroll for Str"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="white-dex" className={dragStatus === "white-dex" ? "auf__hidden" : "auf__scroll"} src={whiteDex} alt="Auf Haven White Scroll for Dex"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="white-int" className={dragStatus === "white-int" ? "auf__hidden" : "auf__scroll"} src={whiteInt} alt="Auf Haven White Scroll for Int"/>
                    <img 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging} id="white-luk" className={dragStatus === "white-luk" ? "auf__hidden" : "auf__scroll"} src={whiteLuk} alt="Auf Haven White Scroll for Luk"/>
                </div>
                <div className="auf__tip-container">
                    <p className="auf__tip">Scroll are STR, DEX, INT and LUK respectively.</p>
                    <p className="auf__tip">Only Dark Scrolls have 50% chance to destroy when failed.</p>
                    <p className="auf__tip">Both Scrolls have 50% chance of success.</p>
                </div>
                </div>
            <div className="auf__button-container">
                <div onClick={() => navigate(-1)} className="auf__button">Back</div>
                <div onClick={() => handleReset()} className="auf__button">Reset</div>
            </div>
            <div className="auf__animation-container">
                <img className={scrollStatus === true ? "auf__fail" : "auf__hidden"} src={animation} alt="Scroll Fail Animation"/>
                <img className={successStatus === true ? "auf__success" : "auf__hidden"} src={successAnimation} alt="Scroll Success Animation"/>
            </div>
            </section>
    )
}

export default AufHaven;