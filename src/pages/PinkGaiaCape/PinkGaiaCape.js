import '../ChaosScrolling.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import pinkGaiaCape from '../../assets/Images/Items/gaia-cape.png';
import chaosScroll from '../../assets/Images/Items/chaos-scroll.png';
import whiteScroll from '../../assets/Images/Items/white-scroll.png';
import fail from '../../assets/Images/fail.gif';
import success from '../../assets/Images/success.gif';

function PinkGaiaCape({ 
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

/// Renders success and fail animation
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

// Pink Gaia Cape random stats
    const attackStat = getRndInteger(2, 4);
    const defStat = getRndInteger(16, 20);
    const mDefStat = getRndInteger(19, 25);

// Pink Gaia Cape states
    const [weaponAttack, setWeaponAttack] = useState(attackStat);
    const [weaponDef, setWeaponDef] = useState(defStat);
    const [weaponMDef, setWeaponMDef] = useState(mDefStat);
    const [weaponSlots, setWeaponSlots] = useState(5);
    const [useWhiteScroll, setUseWhiteScroll] = useState(false);
    const [scrollStatus, setScrollStatus] = useState(false);
    const [successStatus, setSuccessStatus] = useState(false);
    const [scrollMessage, setScrollMessage] = useState("Drag Scroll over item to start.");
    const [animation, setAnimation] = useState();
    const [successAnimation, setSuccessAnimation] = useState();
    const [dragStatus, setDragStatus] = useState(false);

// Scrolling Logic

// Handle White Scroll Use
    const handleWhiteScroll = () => {
        setUseWhiteScroll(!useWhiteScroll)
    }

    const handleScroll = () => {
        const scrollChance = Math.floor(Math.random() * 11);
        const weaponAttackChance = getRndInteger(-5, 5);
        const weaponDefChance = getRndInteger(-5, 5);
        const weaponMDefChance = getRndInteger(-5, 5);

// If no slots, dont scroll at all
    if(weaponSlots === 0) {
        return(
            setScrollMessage(noSlotsMessage)
        )
    }

// Main Scrolling
    if(scrollChance < 5) {
        if(useWhiteScroll === true) {
            setScrollStatus(true);
            setAnimation(fail)
            failAnimationRender();
            setScrollMessage(failWhiteScrollMessage)
            setTotalScrollCount(totalScrollCount + 1)
        } else {
            setWeaponSlots(weaponSlots - 1)
            setScrollMessage(failMessage)
            setTotalScrollCount(totalScrollCount + 1)
            setScrollStatus(true);
            setAnimation(fail)
            failAnimationRender();
        }
    } else {
        setPassRateCount(passRateCount + 1)
        setScrollMessage(successMessage)
        setWeaponSlots(weaponSlots - 1)
        setTotalScrollCount(totalScrollCount + 1)
        setSuccessStatus(true);
        setSuccessAnimation(success);
        successAnimationRender();
        if(weaponAttack > 0) {
            setWeaponAttack(weaponAttack + weaponAttackChance)
        } if(weaponDef > 0) {
            setWeaponDef(weaponDef + weaponDefChance)
        } if (weaponMDef > 0) {
            setWeaponMDef(weaponMDef + weaponMDefChance)
        }
    }

}

// Stats cannot be below 0
    if(weaponAttack < 0) {
        setWeaponAttack(0)
    } if(weaponDef < 0) {
        setWeaponDef(0)
    } if(weaponMDef < 0) {
        setWeaponMDef(0)
    }

// Handle Reset Button
    const handleReset = () => {
        setWeaponAttack(attackStat);
        setWeaponDef(defStat);
        setWeaponMDef(mDefStat);
        setWeaponSlots(5)
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
                    className="chaos__item" src={pinkGaiaCape} alt="Pink Gaia Cape"/>
                <article className="chaos__stats-container">
                    <div className="chaos__stats">Category: Cape</div>
                    <div className="chaos__stats">Weapon Attack: {weaponAttack}</div>
                    <div className="chaos__stats">Weapon Def: {weaponDef}</div>
                    <div className="chaos__stats">Magic Def: {weaponMDef}</div>
                    <div className="chaos__stats">Slots: {weaponSlots}</div>
                </article>
            </div>
            <div className="chaos__scroll-message">{scrollMessage}</div>
            <div className="chaos__scroll-container">
                <div className="chaos__whitescroll-container">
                    <img className={useWhiteScroll === false ? "chaos__image-grey" : "chaos__image"} src={whiteScroll} alt="White Scroll"/>
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
                <div onClick={() => navigate(-1)} className="chaos__button">Back</div>
                <div onClick={handleReset} className="chaos__button">Reset</div>
            </div>
            <img className={scrollStatus === true ? "chaos__animation" : "chaos__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
            <img className={successStatus === true ? "chaos__success" : "chaos__animation-hidden"} src={successAnimation} alt="Scroll Success Animation"/>
        </section>
    )
}

export default PinkGaiaCape;