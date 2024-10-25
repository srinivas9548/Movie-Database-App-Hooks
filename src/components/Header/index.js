import { IoSearch, IoMenu, IoClose } from 'react-icons/io5'

import { NavLink } from 'react-router-dom'

import './index.css'

const Header = props => {
    const {
        isMenubarOpen,
        toggleMenubar,
        isSearchOpen,
        toggleSearchbar,
        searchInput,
        onChangeSearchInput,
        onClickSearchBtn,
    } = props

    const onChangeKeyDown = (event) => {
        if (event.key === "Enter") {
            onClickSearchBtn()
        }
    }

    return (
        <nav className="nav-header">
            <div className="nav-content">
                <NavLink to="/" className="nav-link">
                    <h1 className="nav-logo-heading">movieDB</h1>
                </NavLink>
                <div className="nav-mobile-container">
                    <IoSearch className="search-menu" onClick={toggleSearchbar} />
                    <IoMenu className="hamburger-menu" onClick={toggleMenubar} />
                </div>
                <div className="nav-desktop-container">
                    <ul className="nav-item-container">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Popular
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/top-rated" className="nav-link">
                                Top Rated
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/upcoming" className="nav-link">
                                Upcoming
                            </NavLink>
                        </li>
                    </ul>
                    <input
                        type="text"
                        className="nav-search-input"
                        placeholder="Movie Name"
                        value={searchInput}
                        onInput={onChangeSearchInput}
                        onChange={() => console.log("change")}
                        onKeyDown={onChangeKeyDown}
                    />
                    <button
                        type="button"
                        className="search-button"
                        onClick={onClickSearchBtn}
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* isSearchbar is true then it open the Searchbar */}
            {isSearchOpen && (
                <div className="mobile-search-bar">
                    <input
                        type="text"
                        className="mobile-search-input"
                        placeholder="Movie Name"
                        value={searchInput}
                        onInput={onChangeSearchInput}
                        onKeyDown={onChangeKeyDown}
                    />
                    <button
                        type="button"
                        className="search-btn-mobile"
                        onClick={onClickSearchBtn}
                    >
                        Search
                    </button>
                </div>
            )}

            {/* isMenubarOpen is true then it open the Menubar */}
            {isMenubarOpen && (
                <div className="mobile-menubar">
                    <IoClose className="close-icon" onClick={toggleMenubar} />
                    <ul className="menubar-item-container">
                        <li className="menubar-item">
                            <NavLink to="/" className="nav-link">
                                Popular
                            </NavLink>
                        </li>

                        <li className="menubar-item">
                            <NavLink to="/top-rated" className="nav-link">
                                Top Rated
                            </NavLink>
                        </li>

                        <li className="menubar-item">
                            <NavLink to="/upcoming" className="nav-link">
                                Upcoming
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Header