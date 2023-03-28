import './Background.scss'

import backgroundImage from '../../assets/Images/background.gif';

function Background() {
    return(
        <img className="background" src={backgroundImage}/>
    )
}

export default Background;