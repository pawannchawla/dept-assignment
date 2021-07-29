import facebook from '../assets/icons/icon-fb.png';
import twitter from '../assets/icons/icon-twitter.png';
import instagram from '../assets/icons/icon-instagram.png';
export const footerInfo = {
    id: 1,
    title: 'Dept',
    chamberOfCommerce: '63464101',
    vat: 'NL 8552.47.502.B01',
    socialMedias: [
        {
            id: 1,
            name: 'facebook',
            icon: facebook,
            alt: 'facebook icon',
            url: 'https://www.facebook.com/'
            },
        {
            id: 2,
            name: 'twitter',
            icon: twitter,
            alt: 'twitter icon',
            url: 'https://www.twitter.com/'
        },
        {
            id: 3,
            name: 'instagram',
            icon: instagram,
            alt: 'instagram icon',
            url: 'https://www.instagram.com/'
        }
    ],
    menu: [
        {
            id: 1,
            name: 'Work',
            url: '/'
        },
        {
            id: 2,
            name: 'Services',
            url: '/'
        },
        {
            id: 3,
            name: 'Stories',
            url: '/'
        },
        {
            id: 4,
            name: 'About',
            url: '/'
        },
        {
            id: 5,
            name: 'Careers',
            url: '/'
        },
        {
            id: 6,
            name: 'Contact',
            url: '/'
        }
    ]
}

export default footerInfo;