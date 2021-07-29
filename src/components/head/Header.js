import { useState } from 'react';
import DeptIcon from '../../assets/icons/icon-dept.svg';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import Menu from './Menu';
const Header = () => {
    const [stickyHeader, setStickyHeader] = useState("header__container");
    const [toggleMenu, setToggleMenu] = useState(false);
    window.addEventListener('scroll', () => {
        let headerDOM =document.querySelector(".header__container");
        let header = "";
        if (headerDOM) {
            header = headerDOM.getBoundingClientRect();
        }
        setStickyHeader((window.scrollY > header.height) ? "header__container sticky" : "header__container");        
    });
    const closeMenu = () => {
        document.querySelector("body").style.overflowY = "auto";
        setToggleMenu(false);
    }
    const openMenu = () => {
        document.querySelector("body").style.overflowY = "hidden";
        setToggleMenu(true);
    }
    const openByKey = (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            setToggleMenu(true)
        }
    }
    return (
        <header className="header">
            <section className={stickyHeader}>
                <a href="/" alt="DEPT Agency">
                    <img src={DeptIcon} alt="Dept Icon" className="header__container--icon-dept" />
                </a>
                <div className="header__container--menu" tabIndex={0} onClick={() => openMenu()} onKeyDown={e => openByKey(e)}>
                    <span className="header__container--menu-text">MENU</span>
                    <img src={MenuIcon} alt="MenuIcon" className="header__container--icon-menu" />
                </div>
            </section>
            <section className="header__body">
                <span className="header__body--title">WORK</span>
                <div className="btn-container">
                    <button className="btn btn--view-case">VIEW CASE</button>
                </div>
            </section>
            {toggleMenu && (
                <Menu closeMenu={closeMenu}/>
            )} 
        </header>  
    );
};
export default Header;