import './ChaosScrolling.scss';
import { useState } from 'react';

// Images
import faceStompers from '../../../assets/Images/face-stomper.png';
import chaosScroll from '../../../assets/Images/chaos-scroll.png';
import whiteScroll from '../../../assets/Images/white-scroll.png';

function ChaosScrolling() {

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
    setDragOver("dragged over")
    event.preventDefault();
}
let handleDropped = (event) => {
    setDropped("dropped on u")
}
    return(
        <div className="chaos__main">
            <div className="chaos__item-container">
                <img 
                onDragOver={handleDragOver} 
                onDrop={handleDropped}
                className="chaos__item" src={faceStompers} alt="Facestompers"/>
            </div>
            <div className="chaos__scroll-container">
                <img className="chaos__image" src={whiteScroll} alt="White Scroll"/>
                <img draggable 
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDrag={handleDragging}
                    className="chaos__image" src={chaosScroll} alt="Chaos Scroll"/>
                <div>{dragStart}</div>
                <div>{dragEnd}</div>
                <div>{dragging}</div>
                <div>{dragOver}</div>
                <div>{dropped}</div>
            </div>
        </div>
    )
}

export default ChaosScrolling;