import arrowUp from '../../assets/icons/icon-scroll-to-top.svg';
import { footerInfo } from '../../mocks/footer';

const Footer = () => {
    const scrollToTop = () => {
        window.scroll(0, 0)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <footer className='footer'>
            <div className='footer__line'>
                <nav className='footer__menu'>
                    <h3 className='footer__title'>{footerInfo.title}</h3>
                    <ul className='footer__list' role='navigation'>
                        {footerInfo.menu.map(item => (
                            <li key={item.id} className='footer__menu-item'>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className='footer__list' role='navigation'>
                        {footerInfo.socialMedias.map(item => (
                            <li key={item.id} className='footer__social-item'>
                                <a href={item.url}>
                                    <img src={item.icon} alt={item.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='footer__info-section' role='contentinfo'>
                    <div className='footer__company-info'>
                        <p>Chamber of Commerce: {footerInfo.chamberOfCommerce}</p>
                        <p>VAT: {footerInfo.vat}</p>
                        <p>Terms and conditions</p>
                        <p>&copy; 2020 Dept Agency</p>
                    </div>
                </div>
            </div>
            <div className='footer__top-column'>
                <button className='footer__top-button' tabIndex={0} aria-label='Scroll to top of page' onClick={() => scrollToTop()}>
                    <img src={arrowUp} alt='arrow up icon' />
                    TOP
                </button>
            </div>
        </footer>
    )
}

export default Footer;
