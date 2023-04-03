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

function AufHaven() {
    return(
        <section className="auf">
            <div className="auf__item-container">
                <img className="auf__item" src={aufHavenCirclet} alt="Auf Haven Circlet"/>
                <div className="auf__stats-container">
                    <p className="auf__stats">Str:</p>
                    <p className="auf__stats">Dex:</p>
                    <p className="auf__stats">Int:</p>
                    <p className="auf__stats">Luk:</p>
                    <p className="auf__stats">Slots:</p>
                </div>
            </div>
            <p className="auf__message">Scroll Message</p>
            <div className="auf__scroll-container">
                <div className="auf__container-dark">
                    <img className="auf__scroll" src={darkStr} alt="Auf Haven Dark Scroll for Str"/>
                    <img className="auf__scroll" src={darkDex} alt="Auf Haven Dark Scroll for Dex"/>
                    <img className="auf__scroll" src={darkInt} alt="Auf Haven Dark Scroll for Int"/>
                    <img className="auf__scroll" src={darkLuk} alt="Auf Haven Dark Scroll for Luk"/>
                </div>
                <div className="auf__container-white">
                    <img className="auf__scroll" src={whiteStr} alt="Auf Haven White Scroll for Str"/>
                    <img className="auf__scroll" src={whiteDex} alt="Auf Haven White Scroll for Dex"/>
                    <img className="auf__scroll" src={whiteInt} alt="Auf Haven White Scroll for Int"/>
                    <img className="auf__scroll" src={whiteLuk} alt="Auf Haven White Scroll for Luk"/>
                </div>
            </div>
            <div className="auf__button-container">
                <div className="auf__button">Back</div>
                <div className="auf__button">Reset</div>
            </div>
            {/* <img className={burnFailStatus === true ? "general__animation-burn" : "general__animation-hidden"} src={animation} alt="Scroll Fail Animation"/>
            <img className={burnSuccessStatus === true ? "general__success-burn" : "general__animation-hidden"} src={successAnimation} alt="Scroll Success Animation"/> */}
        </section>
    )
}

export default AufHaven;