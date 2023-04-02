import './Page404.scss';
import { useNavigate } from 'react-router-dom';

import image404 from '../../assets/Images/404.gif';

function Page404() {

    const navigate = useNavigate();

    return(
        <section className="error-page">
            <h2 className="error-page__title">404 Error</h2>
            <img className="error-page__image"src={image404} alt="404 Error Image"/>
            <h2 className="error-page__title">Page not found!</h2>
            <div onClick = {() => navigate("/mode")} className="error-page__button">Home</div>
        </section>
    )
}

export default Page404;