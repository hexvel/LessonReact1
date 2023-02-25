function Header() {
    return (
    <><header className="Header">
            <div className="LogoHeader">
                LIONIC
            </div>
            <div className="container">
                <ul>
                    <li className="Blue">Home</li>
                    <li>Services</li>
                    <li>Articles</li>
                    <li>Clients</li>
                    <li>Contacts</li>
                    <li>join us</li>
                </ul>
                <button className="Trial">
                    FREE TRIAL
                </button>
            </div>
        </header>
        <div className="HeroContainer">
            <div className="Text">
                <p className='Smarter'>
                    This is simply a smarter way< br/>
                    to make your legal online
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,< br/>
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                </p>
                <button className="HeroTrialButton">FREE 30 DAY TRIAL</button>
                <div className="sslContainer">
                    <p className='ssl'>
                        <img src='/images/Vector.png' alt="" /> SSL secured connection
                    </p>
                </div>
            </div>
        </div>
        </>
);
}

export default Header;