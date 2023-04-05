function Header() {
    return (
        <header>
            <div className="flex items-center space-x-2 md:space-x-10">  
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width={100}
                height={100}
                className="cursor-pointer object-contain" 
                />
                <ul className="hidden space-x-4 md:flex">
                <li className="header__link">Home</li>
                <li className="header__link">TV Shows</li>
                <li className="header__link">Movies</li>
                <li className="header__link">New & Popular</li>
                <li className="header__link">My List</li>
                </ul>
            </div>
            <div></div>
        </header>
    )
}

export default Header;