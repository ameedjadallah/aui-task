import './Header.scss';
import data  from '../data/data.json';

function Header(){
    const userData = data.user;
    return(
        <header className="header flex justify-between items-center">
            <div className="hello-message capitalize">hello <b>{userData.name}!</b></div>
            <div className="user-image">
                <img src={userData.image} alt="username"/>
            </div>
        </header>
    )
}

export default Header;