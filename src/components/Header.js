import './Header.scss';

function Header(){
    return(
        <header className="header flex justify-between items-center">
            <div className="hello-message capitalize">hello <b>Ameed!</b></div>
            <div className="user-image">
                <img src="https://bit.ly/3ym9Kdn" alt="username"/>
            </div>
        </header>
    )
}

export default Header;