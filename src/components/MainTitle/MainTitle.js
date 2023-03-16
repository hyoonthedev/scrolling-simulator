import './MainTitle.scss';
import maplestoryLeaf from '../../assets/Images/maplestory-leaf.png';

function MainTitle() {
    return(
        <div className="main-title">
            <h3 className="main-title__text">Chaos Simulator</h3>
            <img className="main-title__logo" src={maplestoryLeaf} alt="MapleStory leaf"/>
        </div>
    )
}

export default MainTitle;