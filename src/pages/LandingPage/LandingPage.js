import './LandingPage.scss';

// Images
import chaosScroll from '../../assets/Images/chaos-scroll.png';
import scroll from '../../assets/Images/scroll.png';

function LandingPage() {
    return(
        <div>
        <img src={chaosScroll} alt="Chaos Scroll"/>
        <img src={scroll} alt="30% Scroll"/>
        </div>
    )
}

export default LandingPage;