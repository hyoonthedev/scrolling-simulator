import './ChaosScrolling.scss';
import { useState } from 'react';

// Images
import faceStompers from '../../assets/Images/face-stomper.png';
import chaosScroll from '../../assets/Images/chaos-scroll.png';
import whiteScroll from '../../assets/Images/white-scroll.png';

function ChaosScrolling() {

// Randomizer
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

// Random Stats on start``
    const attackStat = getRndInteger(1, 4);
    const defStat = getRndInteger(18, 23)
    const mDefStat = getRndInteger(4, 7)

// Item Stat States
    const [weaponAttack, setWeaponAttack] = useState(attackStat);
    const [weaponDef, setWeaponDef] = useState(defStat);
    const [weaponMDef, setWeaponMDef] = useState(mDefStat);
    const [weaponSlots, setWeaponSlots] = useState(5);
    const [useWhiteScroll, setUseWhiteScroll] = useState(false);
    const [scrollMessage, setScrollMessage] = useState("Drag Scroll over item to start.");

// Scrolling Logic

// Handle White Scroll Use
    const handleWhiteScroll = () => {
        setUseWhiteScroll(!useWhiteScroll)
    }

// Scroll Success and Fail Messages
    const successMessage = "The scroll lights up, and then its mysterious power has been transfered to the item."
    const failMessage = "The scroll lights up, but the item winds up as if nothing happened."
    const failWhiteScrollMessage = "The item upgrade failed, but since the White Scroll was used the number of item upgrade slots remain in tact."
    const noSlotsMessage = "No more available slots!"
    
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
        if(scrollChance < 4) {
            if(useWhiteScroll === true) {
                setScrollMessage(failWhiteScrollMessage)
            } else {
                setWeaponSlots(weaponSlots -1)
                setScrollMessage(failMessage)
            }
        } else {
            setScrollMessage(successMessage)
            setWeaponSlots(weaponSlots -1)
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
        setScrollMessage(null)
    }

    const [dragStart, setDragStart] = useState("start drag nope");
    const [dragEnd, setDragEnd] = useState("end drag nope");
    const [dragging, setDragging] = useState("dragging nope");
    const [dragOver, setDragOver] = useState("not over")
    const [dropped, setDropped] = useState("i dont feel it")

let handleDragStart = (e) => {
    setDragStart("drag started")
    e.dataTransfer.effectAllowed = "copyMove";
    // e.dataTransfer.effectAllowed = 'none';
}
let handleDragEnd = () => {
    setDragEnd("drag Ended")
}
let handleDragging = () => {
    setDragging("dragging")
}
let handleDragOver = (event) => {
    event.preventDefault();
}
let handleDropped = () => {
    handleScroll();
}
    return(
        <div className="chaos__main">
            <div className="chaos__item-container">
                <img 
                onDragOver={handleDragOver} 
                onDrop={handleDropped}
                className="chaos__item" src={faceStompers} alt="Facestompers"/>
                <article className="chaos__stats-container">
                    <div className="chaos__stats">Category: Shoes</div>
                    <div className="chaos__stats">Weapon Attack: {weaponAttack}</div>
                    <div className="chaos__stats">Weapon Def: {weaponDef}</div>
                    <div className="chaos__stats">Magic Def: {weaponMDef}</div>
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
                    className="chaos__image" src={chaosScroll} alt="Chaos Scroll"/>
            </div>
            <div
            onClick={handleReset}
            className="chaos__reset">Reset</div>
        </div>
    )
}

export default ChaosScrolling;