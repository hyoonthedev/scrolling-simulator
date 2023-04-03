import './MainTitle.scss';
import maplestoryLeaf from '../../assets/Images/maplestory-leaf.png';

function MainTitle() {
    return(
        <header className="main-title">
            <h3 className="main-title__text">ScrollSim</h3>
            <img className="main-title__logo" src={maplestoryLeaf} alt="MapleStory leaf"/>
        </header>
    )
}

export default MainTitle;