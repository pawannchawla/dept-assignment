import headerInfo from '../../mocks/header';
import closeIcon from '../../assets/icons/icon-cross.svg';
const Menu = ({ closeMenu }) => {
    const onKeyClose = (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            closeMenu();
        }
    };
    return (
        <section className='menu'>
            <div className='menu__container'>
                <a className='menu__logo' href='/' title='Dept Agency Logo' tabIndex={0} aria-label='Dept Agency Logo' >
                    {headerInfo.logo}
                </a>
                <div className='menu__menu-icon' tabIndex={0} onClick={closeMenu} onKeyDown={(e) => onKeyClose(e)} aria-label='Close menu'>
                    <div className='menu__close-button'>
                        <img src={closeIcon} alt="close menu" />
                    </div>
                </div>
            </div>
            <nav className='menu__content'>
                <ul className='menu__list' role='navigation'>
                    {headerInfo.menuItems.map((item, idx) => (
                        <li className='menu__items' key={idx}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='menu__landen'>
                <ul className='menu__landen-items'>
                    {headerInfo.landenItems.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='menu__social'>
                <ul className='menu__social-items'>
                    {headerInfo.socialItems.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Menu;
