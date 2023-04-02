import './LandingPage.scss';

import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    return(
        <section className="landing-page">
            <h2 className="landing-page__title">Welcome to scrolls.im!</h2>
            <p className="landing-page__text">scrolls.im is a Maplestory scrolling simulator designed for players that enjoy the thrill of scrolling.</p>
            <p className="landing-page__text">Choose between different modes!</p>
            <ul className="landing-page__list">
                <li>Chaos Scroll</li>
                <li>Regular, Dark and Burn Scroll</li>
                <li>Aufheben Circlet</li>
            </ul>
            <p className="landing-page__text">Try this simulator before you <span className="landing-page__red-text">risk it all</span> on your items!</p>
            <p className="landing-page__text">Enjoy and have fun!</p>
            <div onClick={() => navigate('/mode')} className="landing-page__start">Start</div>
        </section>
    )
}

export default LandingPage;