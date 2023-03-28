import '../ChaosScrolling.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import brownWorkGlove from '../../assets/Images/bwg.png';
import chaosScroll from '../../assets/Images/chaos-scroll.png';
import whiteScroll from '../../assets/Images/white-scroll.png';
import darkScroll from '../../assets/Images/scroll.png';
import fail from '../../assets/Images/fail.gif';
import success from '../../assets/Images/success.gif';

function BrownWorkGlove({
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
    destroyItemMessage
})  {
    const navigate = useNavigate();

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
        
// Element Pierce states
    const [itemWeaponAttack, setItemWeaponAttack] = useState(0);
    const [weaponSlots, setWeaponSlots] = useState(7);
    const [useWhiteScroll, setUseWhiteScroll] = useState(false);
    const [scrollStatus, setScrollStatus] = useState(false);
    const [successStatus, setSuccessStatus] = useState(false);
    const [scrollMessage, setScrollMessage] = useState("Drag Scroll over item to start.");
    const [animation, setAnimation] = useState();
    const [successAnimation, setSuccessAnimation] = useState();
    const [dragStatus, setDragStatus] = useState(false);
    const [darkScrollDragStatus, setDarkScrollDragStatus] = useState(false);
    const [itemDestroyed, setItemDestroyed] = useState(false);
        
// Scrolling Logic
        
// Handle White Scroll Use
    const handleWhiteScroll = () => {
        setUseWhiteScroll(!useWhiteScroll)
    }
            
    const handleScroll = () => {
        const scrollChance = Math.floor(Math.random() * 11);
        const weaponAttackChance = getRndInteger(-5, 5)
        
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
            setSuccessStatus(true);
            setSuccessAnimation(success);
            successAnimationRender();
            setPassRateCount(passRateCount + 1)
            setScrollMessage(successMessage)
            setWeaponSlots(weaponSlots - 1)
            setTotalScrollCount(totalScrollCount + 1)
            if(itemWeaponAttack > 0) {
                setItemWeaponAttack(itemWeaponAttack + weaponAttackChance)
            }
        }
    }

// Main Dark Scrolling
    const handleDarkScroll = () => {
        const scrollChance = Math.floor(Math.random() * 11);
        const destroyChance = Math.floor(Math.random() * 11);

// If no slots, can't scroll
        if(weaponSlots === 0) {
            return(
                setScrollMessage(noSlotsMessage)
            )
        }

        if(scrollChance > 4) {
            if(destroyChance > 5) {
                setScrollStatus(true);
                setAnimation(fail)
                failAnimationRender();
                setScrollMessage(destroyItemMessage)
                setItemDestroyed(true)
            } else {
                if(useWhiteScroll === true) {
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                    setScrollMessage(failWhiteScrollMessage)
                } else {
                    setWeaponSlots(weaponSlots - 1)
                    setScrollMessage(failMessage)
                    setScrollStatus(true);
                    setAnimation(fail)
                    failAnimationRender();
                }
            }
        } if(scrollChance < 4) {
            setSuccessStatus(true);
            setSuccessAnimation(success);
            successAnimationRender();
            setItemWeaponAttack(itemWeaponAttack + 3)
            setWeaponSlots(weaponSlots - 1)
            setScrollMessage(successMessage)
        }
    }
// Stats cannot be below 0
    if(itemWeaponAttack < 0) {
        setItemWeaponAttack(0)
    }
        
// Handle Reset Button
    const handleReset = () => {
        setItemWeaponAttack(0);
        setWeaponSlots(7);
        setItemDestroyed(false);
        setScrollMessage("Drag Scroll over item to start.");
        setResetCount(resetCount + 1);
    }
        
// Handle Drag states
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = "copyMove";
    }
    const handleDragEnd = () => {
        setDragStatus(false)
    }
    const handleDarkScrollDragEnd = () => {
        setDarkScrollDragStatus(false)
    }
    const handleDragging = () => {
        setDragStatus(true)
    }
    const handleDarkScrollDragging = () => {
        setDarkScrollDragStatus(true)
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const handleDropped = () => {
        if(dragStatus === true) {
            handleScroll()
        } if(darkScrollDragStatus === true) {
            handleDarkScroll()
        }
    }

    return(
        <section className="chaos__main">
            <div className="chaos__item-container">
            <img 
                onDragOver={handleDragOver} 
                onDrop={handleDropped}
                className={itemDestroyed === false ? "chaos__item" : "chaos__item-hidden"} src={brownWorkGlove} alt="Brown Work Glove"
            />
            <div className={itemDestroyed === true ? "chaos__item-placeholder" : "chaos__item-hidden"}></div>
                <article className={itemDestroyed === false ? "chaos__stats-container" : "chaos__stats-container-hidden"}>
                    <div className="chaos__stats">Category: Gloves</div>
                    <div className={itemWeaponAttack === 0 ? "chaos__stats-hidden" : "chaos__stats"}>Weapon Attack: {itemWeaponAttack}</div>
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
                    onDragEnd={handleDarkScrollDragEnd}
                    onDrag={handleDarkScrollDragging}
                    className={darkScrollDragStatus === true ? "chaos__hidden" : "chaos__image"} src={darkScroll} alt="30% Dark Scroll"
                />
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === true ? "chaos__hidden" : "chaos__image"} src={chaosScroll} alt="Chaos Scroll"
                />
            </div>
            <div className="chaos__button-container">
                <div onClick={() => navigate('/')} className="chaos__button">Back</div>
                <div onClick={handleReset} className="chaos__button">Reset</div>
            </div>
            <img className={scrollStatus === true ? "chaos__animation-bwg" : "chaos__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
            <img className={successStatus === true ? "chaos__success" : "chaos__animation-hidden"} src={successAnimation} alt="Scroll Fail Animation"/>
        </section>
    )
}

export default BrownWorkGlove;