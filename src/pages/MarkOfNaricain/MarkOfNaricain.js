import '../ChaosScrolling.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import markOfNaricain from '../../assets/Images/mark-of-naricain.png';
import chaosScroll from '../../assets/Images/chaos-scroll.png';
import whiteScroll from '../../assets/Images/white-scroll.png';
import fail from '../../assets/Images/fail.gif';

function MarkOfNaricain({
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
    const strStat = getRndInteger(4, 6);
    const dexStat = getRndInteger(4, 6);
    const intStat = getRndInteger(4, 6);
    const lukStat = getRndInteger(4, 6);
    const hpStat = getRndInteger(290, 310);
    const mpStat = getRndInteger(290, 310);
    const weaponAttack = getRndInteger(3, 5);
    const magicAttack = getRndInteger (9, 11);
    const accuracyStat = getRndInteger(13, 17);
    const speedStat = getRndInteger(4, 6);
    const jumpStat = getRndInteger(4, 6);
        
// Element Pierce states
    const [itemStr, setItemStr] = useState(strStat);
    const [itemDex, setItemDex] = useState(dexStat);
    const [itemInt, setItemInt] = useState(intStat);
    const [itemLuk, setItemLuk] = useState(lukStat);
    const [itemHp, setItemHp] = useState(hpStat);
    const [itemMp, setItemMp] = useState(mpStat);
    const [itemWeaponAttack, setItemWeaponAttack] = useState(weaponAttack);
    const [itemMagicAttack, setItemMagicAttack] = useState(magicAttack);
    const [itemAccuracy, setItemAccuracy] = useState(accuracyStat);
    const [itemSpeed, setItemSpeed] = useState(speedStat);
    const [itemJump, setItemJump] = useState(jumpStat);
    const [weaponSlots, setWeaponSlots] = useState(1);
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
        const intChance = getRndInteger(-5, 5);
        const lukChance = getRndInteger(-5, 5);
        const hpChance = getRndInteger(-5, 5);
        const mpChance = getRndInteger(-5, 5);
        const weaponAttackChance = getRndInteger(-5, 5);
        const magicAttackChance = getRndInteger(-5, 5);
        const accuracyChance = getRndInteger(-5, 5);
        const speedChance = getRndInteger(-5, 5);
        const jumpChance = getRndInteger(-5, 5);
        
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
            } if(itemInt > 0) {
                setItemInt(itemInt + intChance)
            } if(itemLuk > 0) {
                setItemLuk(itemLuk + lukChance)
            } if(itemHp > 0) {
                setItemHp(itemHp + hpChance)
            } if(itemMp > 0) {
                setItemMp(itemMp + mpChance)
            } if(itemWeaponAttack > 0) {
                setItemWeaponAttack(itemWeaponAttack + weaponAttackChance)
            } if(itemMagicAttack > 0) {
                setItemMagicAttack(itemMagicAttack + magicAttackChance)
            } if(itemAccuracy > 0) {
                setItemAccuracy(itemAccuracy + accuracyChance)
            } if(itemSpeed > 0) {
                setItemSpeed(itemSpeed + speedChance)
            } if(itemJump > 0) {
                setItemJump(itemJump + jumpChance)
            }
        }
    }
        
// Stats cannot be below 0
    if(itemStr < 0) {
        setItemStr(0)
    } if(itemDex < 0) {
        setItemDex(0)
    } if(itemInt < 0) {
        setItemInt(0)
    } if(itemLuk < 0) {
        setItemLuk(0)
    } if(itemHp < 0) {
        setItemHp(0)
    } if(itemMp < 0) {
        setItemMp(0)
    } if(itemWeaponAttack < 0) {
        setItemWeaponAttack(0)
    } if(itemMagicAttack < 0) {
        setItemMagicAttack(0)
    } if(itemAccuracy < 0) {
        setItemAccuracy(0)
    } if(itemSpeed < 0) {
        setItemSpeed(0)
    } if(itemJump < 0) {
        setItemJump(0)
    }
        
// Handle Reset Button
    const handleReset = () => {
        setItemStr(strStat);
        setItemDex(dexStat);
        setItemInt(intStat);
        setItemLuk(lukStat);
        setItemHp(hpStat);
        setItemMp(mpStat);
        setItemWeaponAttack(weaponAttack);
        setItemMagicAttack(magicAttack);
        setItemAccuracy(accuracyStat);
        setItemSpeed(speedStat);
        setItemJump(jumpStat);
        setWeaponSlots(1)
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
                className="chaos__item" src={markOfNaricain} alt="Mark Of Naricain"/>
                <article className="chaos__stats-container">
                    <div className="chaos__stats">Category: Earring</div>
                    <div className="chaos__stats">STR: {itemStr}</div>
                    <div className="chaos__stats">DEX: {itemDex}</div>
                    <div className="chaos__stats">INT: {itemInt}</div>
                    <div className="chaos__stats">LUK: {itemLuk}</div>
                    <div className="chaos__stats">HP: {itemHp}</div>
                    <div className="chaos__stats">MP: {itemMp}</div>
                    <div className="chaos__stats">Weapon Attack: {itemWeaponAttack}</div>
                    <div className="chaos__stats">Magic Attack: {itemMagicAttack}</div>
                    <div className="chaos__stats">Accuracy: {itemAccuracy}</div>
                    <div className="chaos__stats">Speed: {itemSpeed}</div>
                    <div className="chaos__stats">Jump: {itemJump}</div>
                    <div className="chaos__stats">Slots: {weaponSlots}</div>
                </article>
            </div>
            <div className="chaos__scroll-message-mon">{scrollMessage}</div>
            <div className="chaos__scroll-container-mon">
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
            <img className={scrollStatus === true ? "chaos__animation-mon" : "chaos__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
        </section>
    )
}

export default MarkOfNaricain;