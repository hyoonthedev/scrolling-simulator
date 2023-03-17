import '../ChaosScrolling.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import spectrumGoggle from '../../assets/Images/spectrum-goggle.png';
import chaosScroll from '../../assets/Images/chaos-scroll.png';
import whiteScroll from '../../assets/Images/white-scroll.png';
import fail from '../../assets/Images/fail.gif';

function SpectrumGoggle({
    passRateCount,
    setPassRateCount, 
    totalScrollCount,
    setTotalScrollCount, 
    resetCount,
    setResetCount,
    getRndInteger,
    successMessage,
    failMessage,
    failWhiteScrollMessage,
    noSlotsMessage,
}) {

    const navigate = useNavigate();

// Renders success and fail animation
    const failRender = () => {
        setTimeout(() => setScrollStatus(false), 800);
        setTimeout(() => setAnimation(null), 800);
        clearTimeout(failRender);
    }
        
// Element Pierce random stats
    const strStat = getRndInteger(0, 2);
    const dexStat = getRndInteger(0, 2);
    const speedStat = getRndInteger(0, 2);
    const intStat = getRndInteger(0, 2);
        
// Element Pierce states
    const [itemStr, setItemStr] = useState(strStat);
    const [itemDex, setItemDex] = useState(dexStat);
    const [itemSpeed, setItemSpeed] = useState(speedStat);
    const [weaponSlots, setWeaponSlots] = useState(3);
    const [useWhiteScroll, setUseWhiteScroll] = useState(false);
    const [scrollStatus, setScrollStatus] = useState(false);
    const [scrollMessage, setScrollMessage] = useState("Drag Scroll over item to start.");
    const [animation, setAnimation] = useState();
    const [dragStatus, setDragStatus] = useState(false);
        
// Scrolling Logic
        
// Handle White Scroll Use
    const handleWhiteScroll = () => {
        setUseWhiteScroll(!useWhiteScroll)
    }
            
    const handleScroll = () => {
        const scrollChance = Math.floor(Math.random() * 11);
        const strChance = getRndInteger(-5, 5);
        const dexChance = getRndInteger(-5, 5);
        const speedChance = getRndInteger(-5, 5);
        
// If no slots, dont scroll at all
        if(weaponSlots === 0) {
            return(
                setScrollMessage(noSlotsMessage)
            )
        }
        
// Main Scrolling
        if(scrollChance < 4) {
            if(useWhiteScroll === true) {
                setScrollStatus(true);
                setAnimation(fail)
                failRender();
                setScrollMessage(failWhiteScrollMessage)
                setTotalScrollCount(totalScrollCount + 1)
            } else {
                setWeaponSlots(weaponSlots - 1)
                setScrollMessage(failMessage)
                setTotalScrollCount(totalScrollCount + 1)
                setScrollStatus(true);
                setAnimation(fail)
                failRender();
            }
        } else {
            setPassRateCount(passRateCount + 1)
            setScrollMessage(successMessage)
            setWeaponSlots(weaponSlots - 1)
            setTotalScrollCount(totalScrollCount + 1)
            if(itemStr > 0) {
                setItemStr(itemStr + strChance)
            } if(itemDex > 0) {
                setItemDex(itemDex + dexChance)
            } if(itemSpeed > 0) {
                setItemSpeed(itemSpeed + speedChance)
            }
        }
    }
        
// Stats cannot be below 0
    if(itemStr < 0) {
        setItemStr(0)
    } if(itemDex < 0) {
        setItemDex(0)
    } if(itemSpeed < 0) {
        setItemSpeed(0)
    }
        
// Handle Reset Button
    const handleReset = () => {
        setItemStr(strStat);
        setItemDex(dexStat);
        setItemSpeed(speedStat)
        setWeaponSlots(3)
        setScrollMessage("Drag Scroll over item to start.")
        setResetCount(resetCount + 1)
    }
        
// Handle Drag states
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = "copyMove";
    }
    const handleDragEnd = () => {
        setDragStatus(false)
    }
    const handleDragging = () => {
        setDragStatus(true)
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDropped = () => {
        handleScroll()
    }

    return(
        <section className="chaos__main">
            <div className="chaos__item-container">
            <img 
                onDragOver={handleDragOver} 
                onDrop={handleDropped}
                className="chaos__item" src={spectrumGoggle} alt="Spectrum Goggle"/>
                <article className="chaos__stats-container">
                    <div className="chaos__stats">Category: Eye Accessory</div>
                    <div className="chaos__stats">STR: {itemStr}</div>
                    <div className="chaos__stats">DEX: {itemDex}</div>
                    <div className="chaos__stats">Speed: {itemSpeed}</div>
                    <div className="chaos__stats">Slots: {weaponSlots}</div>
                </article>
            </div>
            <div className="chaos__scroll-message">{scrollMessage}</div>
            <div className="chaos__scroll-container">
                <div className="chaos__whitescroll-container">
                    <img className="chaos__image" src={whiteScroll} alt="White Scroll"/>
                    <div className="chaos__checkbox">
                        <input 
                            type="checkbox"
                            checked={useWhiteScroll}
                            onChange={handleWhiteScroll}
                            />
                        <div className="chaos__text">Use White Scroll</div>
                    </div>
                </div>
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === true ? "chaos__hidden" : "chaos__image"} src={chaosScroll} alt="Chaos Scroll"/>
            </div>
            <div className="chaos__button-container">
                <div onClick={() => navigate('/')} className="chaos__button">Back</div>
                <div onClick={handleReset} className="chaos__button">Reset</div>
            </div>
            <img className={scrollStatus === true ? "chaos__animation-spectrum" : "chaos__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
        </section>
    )
}

export default SpectrumGoggle;