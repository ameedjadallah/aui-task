import './Header.scss';
import data  from '../data/data.json';

function Header(){
    const agencyData = data.agency;
    return(
        <header className="header flex justify-between items-center">
            <div className="hello-message capitalize">hello <b>{agencyData.name}!</b></div>
            <div className="user-image">
                <img src={agencyData.image} alt="username"/>
            </div>
        </header>
    )
}

export default Header;