import zakumHelmet from '../../assets/Images/Items/zakum-helmet.png';
import burn1 from '../../assets/Images/Items/burn-item-1.png';
import burn2 from '../../assets/Images/Items/burn-item-2.png';
import burn3 from '../../assets/Images/Items/burn-item-3.png';
import burn4 from '../../assets/Images/Items/burn-item-4.png';
import burn5 from '../../assets/Images/Items/burn-item-5.png';
import scrollTen from '../../assets/Images/Items/scroll-ten.png';
import scrollThirty from '../../assets/Images/Items/scroll-thirty.png';
import scrollSixty from '../../assets/Images/Items/scroll-sixty.png';
import scrollSeventy from '../../assets/Images/Items/scroll-seventy.png';
import fail from '../../assets/Images/fail.gif';
import success from '../../assets/Images/success.gif';

import './GeneralScrolling.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GeneralScrolling({ successMessage, failMessage, destroyItemMessage }) {

    const navigate = useNavigate();

    const [scrollMessage, setScrollMessage] = useState("Drag Scroll over item to start.");
    const [dragStatus, setDragStatus] = useState(null);
    const [currentDrag, setCurrentDrag] = useState(null);
    const [itemFailStatus, setItemFailStatus] = useState(null);
    const [itemSuccessStatus, setItemSuccessStatus] = useState(null);
    const [burnFailStatus, setBurnFailStatus] = useState(null);
    const [burnSuccessStatus, setBurnSuccessStatus] = useState(null);
    const [burnDestroyed, setBurnDestroyed] = useState(false);
    const [itemDestroyed, setItemDestroyed] = useState(false);
    const [burnItem, setBurnItem] = useState(burn1);

    const [animation, setAnimation] = useState();
    const [successAnimation, setSuccessAnimation] = useState();

// Item Stats
    const [tenPassRate, setTenPassRate] = useState(0);
    const [tenTotal, setTenTotal] = useState(0);
    const [thirtyPassRate, setThirtyPassRate] = useState(0);
    const [thirtyTotal, setthirtyTotal] = useState(0);
    const [sixtyPassRate, setSixtyPassRate] = useState(0);
    const [sixtyTotal, setSixtyTotal] = useState(0);
    const [seventyPassRate, setSeventyPassRate] = useState(0);
    const [seventyTotal, setSeventyTotal] = useState(0);
    const [itemDestroyedCount, setItemDestroyedCount] = useState(0);

    const [failRow, setFailRow] = useState(0);
    const [totalPass, setTotalPass] = useState(0);
    const [totalFail, setTotalFail] = useState(0);
    const [totalDestroy, setTotalDestroy] = useState(0);
    const [totalUsed, setTotalUsed] = useState(0);


/// Renders success and fail animation
    const failAnimationRender = (focus) => {
        if(focus === "burn") {
            setTimeout(() => setBurnFailStatus(false), 800);
            setTimeout(() => setAnimation(null), 800);
            clearTimeout(failAnimationRender);
        } if(focus === "item") {
            setTimeout(() => setItemFailStatus(false), 800);
            setTimeout(() => setAnimation(null), 800);
            clearTimeout(failAnimationRender);
        }
    }

    const successAnimationRender = (focus) => {
        if(focus === "burn") {
            setTimeout(() => setBurnSuccessStatus(false), 1000);
            setTimeout(() => setSuccessAnimation(null), 1000);
            clearTimeout(successAnimationRender);
        } if(focus === "item") {
            setTimeout(() => setItemSuccessStatus(false), 800);
            setTimeout(() => setAnimation(null), 800);
            clearTimeout(successAnimationRender);
        }
    }

// Scrolling Logic
    const handleBurnScroll = (chosenChance) => {
        const scrollChance = Math.floor(Math.random() * 11);
        const destroyChance = Math.floor(Math.random() * 11);

        if(chosenChance === "10") {
            if(scrollChance < 2) {
                setTotalPass(totalPass + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(0);
                setBurnSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("burn");
                setScrollMessage(successMessage);
            } else {
                setTotalFail(totalFail + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(failRow + 1);
                setBurnFailStatus(true);
                setAnimation(fail)
                failAnimationRender("burn");
                setScrollMessage(failMessage);
            }
        } if(chosenChance === "30") {
            if(scrollChance < 4) {
                setTotalPass(totalPass + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(0);
                setBurnSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("burn");
                setScrollMessage(successMessage);
            } else {
                if(destroyChance > 5) {
                    setTotalFail(totalFail + 1);
                    setTotalUsed(totalUsed + 1);
                    setFailRow(failRow + 1);
                    setBurnFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("burn");
                    setScrollMessage(failMessage);
                } else {
                    handleDestroyed("burn");
                    setTotalDestroy(totalDestroy + 1);
                    setTotalUsed(totalUsed + 1);
                    setFailRow(failRow + 1);
                    setBurnFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("burn");
                    setScrollMessage(destroyItemMessage);
                }
            }
        } if(chosenChance === "60") {
            if(scrollChance < 7) {
                setTotalPass(totalPass + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(0);
                setBurnSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("burn");
                setScrollMessage(successMessage);
            } else {
                setTotalFail(totalFail + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(failRow + 1);
                setBurnFailStatus(true);
                setAnimation(fail)
                failAnimationRender("burn");
                setScrollMessage(failMessage);
            }
        } if(chosenChance === "70") {
            if(scrollChance < 8) {
                setTotalPass(totalPass + 1);
                setTotalUsed(totalUsed + 1);
                setFailRow(0);
                setBurnSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("burn");
                setScrollMessage(successMessage);
            } else {
                if(destroyChance > 5) {
                    setTotalFail(totalFail + 1);
                    setTotalUsed(totalUsed + 1);
                    setFailRow(failRow + 1);
                    setBurnFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("burn");
                    setScrollMessage(failMessage);
                } else {
                    handleDestroyed("burn");
                    setTotalDestroy(totalDestroy + 1);
                    setTotalUsed(totalUsed + 1);
                    setFailRow(failRow + 1);
                    setBurnFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("burn");
                    setScrollMessage(destroyItemMessage);
                }
            }
        }
    }

    const handleScroll = (chosenChance) => {
        const scrollChance = Math.floor(Math.random() * 11);
        const destroyChance = Math.floor(Math.random() * 11);

        if(chosenChance === "10") {
            if(scrollChance < 2) {
                setTenPassRate(tenPassRate + 1);
                setTenTotal(tenTotal + 1);
                setItemSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("item");
                setScrollMessage(successMessage);
            } else {
                setTenTotal(tenTotal + 1)
                setItemFailStatus(true);
                setAnimation(fail)
                failAnimationRender("item");
                setScrollMessage(failMessage);
            }
        } if(chosenChance === "30") {
            if(scrollChance < 4) {
                setThirtyPassRate(thirtyPassRate + 1);
                setthirtyTotal(thirtyTotal + 1);
                setItemSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("item");
                setScrollMessage(successMessage);
            } else {
                if(destroyChance > 5) {
                    setthirtyTotal(thirtyTotal + 1);
                    setItemFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("item");
                    setScrollMessage(failMessage);
                } else {
                    setthirtyTotal(thirtyTotal + 1);
                    setItemDestroyedCount(itemDestroyedCount + 1);
                    setItemFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("item");
                    handleDestroyed("item")
                    setScrollMessage(destroyItemMessage);
                }
            }
        } if(chosenChance === "60") {
            if(scrollChance < 7) {
                setSixtyPassRate(sixtyPassRate +1);
                setSixtyTotal(sixtyTotal + 1);
                setItemSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("item");
                setScrollMessage(successMessage);
            } else {
                setSixtyTotal(sixtyTotal + 1);
                setItemFailStatus(true);
                setAnimation(fail)
                failAnimationRender("item");
                setScrollMessage(failMessage);
            }
        } if(chosenChance === "70") {
            if(scrollChance < 8) {
                setSeventyPassRate(seventyPassRate + 1);
                setSeventyTotal(seventyTotal + 1);
                setItemSuccessStatus(true);
                setSuccessAnimation(success);
                successAnimationRender("item");
                setScrollMessage(successMessage);
            } else {
                if(destroyChance > 5) {
                    setSeventyTotal(seventyTotal + 1);
                    setItemFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("item");
                    setScrollMessage(failMessage);
                } else {
                    setSeventyTotal(seventyTotal + 1);
                    setItemDestroyedCount(itemDestroyedCount + 1);
                    setItemFailStatus(true);
                    setAnimation(fail)
                    failAnimationRender("item");
                    handleDestroyed("item")
                    setScrollMessage(destroyItemMessage);
                }
            }
        }
    }


// Handle Drag states
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = "copyMove";
        setCurrentDrag(e.target.id)
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
    const handleDropped = (e) => {
        if(e.target.id === "burn") {
            handleBurnScroll(currentDrag)
        } if(e.target.id === "item") {
            handleScroll(currentDrag)
        } 
    }

// Handle Reset
    const handleReset = () => {
        setScrollMessage("Drag Scroll over item to start.")
        setTenPassRate(0);
        setTenTotal(0);
        setThirtyPassRate(0);
        setthirtyTotal(0);
        setSixtyPassRate(0);
        setSeventyPassRate(0);
        setSeventyTotal(0);
        setItemDestroyed(false);
    }

// Handle Destroyed Item
    const handleDestroyed = (item) => {
        const randomBurnNumber = (Math.floor(Math.random() * 5) + 1);
        const randomBurnItem = () => {
            if(randomBurnNumber === 1) {
                return(burn1)
            } if(randomBurnNumber === 2) {
                return(burn2)
            } if(randomBurnNumber === 3) {
                return(burn3)
            } if(randomBurnNumber === 4) {
                return(burn4)
            } if(randomBurnNumber === 5) {
                return(burn5)
            }
        }
        if(item === "burn") {
            setBurnDestroyed(true);
            setTimeout(() => setBurnItem(randomBurnItem), 1000);
            setTimeout(() => setBurnDestroyed(false), 2000);
        } else {
            setItemDestroyed(true);
        }
    }

    return(
        <section className="general__main">
            <div className="general__item-container">
                <img onDragOver={handleDragOver} 
                    onDrop={handleDropped}
                    className={itemDestroyed === true ? "general__item-hidden" : "general__item"} id="item" src={zakumHelmet} alt="Zakum helmet"/>
                <article className="general__stats-container">
                    <p className="general__stats">10% Pass:{tenPassRate}/{tenTotal}</p>
                    <p className="general__stats">30% Pass:{thirtyPassRate}/{thirtyTotal}</p>
                    <p className="general__stats">60% Pass:{sixtyPassRate}/{sixtyTotal}</p>
                    <p className="general__stats">70% Pass:{seventyPassRate}/{seventyTotal}</p>
                    <p className="general__stats">Total Destroyed:{itemDestroyedCount}</p>
                </article>
            </div>
            <div className="general__item-container">
                <img 
                    onDragOver={handleDragOver} 
                    onDrop={handleDropped}
                    className={burnDestroyed === true ? "general__item-hidden" : "general__item"} id="burn" src={burnItem} alt="Burn Item"/>
                <article className="general__stats-container">
                    <p className={failRow > 0 ? "general__stats-green" : "general__stats"}>Fails in a row:{failRow}</p>
                    <p className="general__stats">Total Passed:{totalPass}</p>
                    <p className="general__stats">Total Failed:{totalFail}</p>
                    <p className="general__stats">Total Destroyed:{totalDestroy}</p>
                    <p className="general__stats">Total Used:{totalUsed}</p>
                </article>
            </div>
            <p className="general__scroll-message">{scrollMessage}</p>
            <div className="general__scroll-container">
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === "10" ? "general__scroll-drag" : "general__scroll"} id="10" src={scrollTen} alt="10% Scroll"/>
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === "30" ? "general__scroll-drag" : "general__scroll"} id="30"src={scrollThirty} alt="30% Scroll"/>
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === "60" ? "general__scroll-drag" : "general__scroll"} id="60"src={scrollSixty} alt="60% Scroll"/>
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className={dragStatus === "70" ? "general__scroll-drag" : "general__scroll"} id="70" src={scrollSeventy} alt="70% Scroll"/>
            </div>
            <p className="general__tip">Scroll are 10%, 30%, 60% and 70% respectively</p>
            <div className="general__button-container">
                <div onClick={() => navigate(-1)} className="general__button">Back</div>
                <div onClick={() => handleReset()} className={itemDestroyed === true ? "general__button-alert" : "general__button"}>Reset</div>
            </div>
            <div className="general__animation-container">
                <img className={burnFailStatus === true ? "general__animation-burn" : "general__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
                <img className={burnSuccessStatus === true ? "general__success-burn" : "general__animation-hidden"} src={successAnimation} alt="Scroll Success Animation"/>
                <img className={itemFailStatus === true ? "general__animation-item" : "general__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
                <img className={itemSuccessStatus === true ? "general__success-item" : "general__animation-hidden"} src={successAnimation} alt="Scroll Success Animation"/>
            </div>
        </section>
    )
}

export default GeneralScrolling;