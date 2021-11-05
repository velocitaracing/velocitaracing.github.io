import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import RadioOutlinedIcon from '@mui/icons-material/RadioOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const MenuItems = [
    {
    title: 'home',
    path: '/',
    heading: 'home',

    dropdown: [
        { 
                title: 'home',
                info: 'read about our journey',
                path: '/',
                icon: HomeRoundedIcon,

            }
    ]
    },
    {
        title: 'about',
        path: '',
        heading: 'know more',
    
        dropdown: [
            { 
                title: 'about us',
                info: 'read about our journey',
                path: '/about',
                icon: InfoOutlinedIcon,
    
            },
            { 
                title: 'our team',
                info: 'current season team',
                path: '/our-team/',
                icon: PeopleOutlineIcon,
            },
            { 
                title: 'faculty',
                info: 'faculty advisors',
                path: '/faculty/rajeesh-s-msrit',
                icon: SupervisorAccountOutlinedIcon,
            }
        ]
    },
    {
        title: 'careers',
        path: '',
        heading: 'student careers',
    
        dropdown: [
            { 
                title: 'student careers',
                info: 'career areas at velocita',
                path: '/careers/',
                icon: TrendingUpIcon,
    
            },
            { 
                title: 'recruitment',
                info: 'annual recruitment drive',
                path: '/careers/recruitment/',
                icon: GroupAddIcon,
            },
        ]
    },
    {
        title: 'sponsors',
        path: '/',
        heading: 'partner program',
    
        dropdown: [
            { 
                title: 'partner with us',
                info: 'Sponsor Programs',
                path: '/partner-with-us/',
                icon: LocalAtmOutlinedIcon,
    
            },
            { 
                title: 'our sponsors',
                info: 'sponsors for current season',
                path: '/sponsors/',
                icon: GroupWorkOutlinedIcon,
            },
        ]
    },
    {
        title: 'shop',
        path: '/',
        heading: 'merch and more',
    
        dropdown: [
            { 
                title: 'shop on narkha',
                info: 'official merchandise store',
                path: '/',
                icon: LocalMallOutlinedIcon,
    
            },
            { 
                title: 'bumper stickers',
                info: 'velocita originals',
                path: '/',
                icon: ReceiptOutlinedIcon,
            },
            { 
                title: 'wallpapers',
                info: 'for all racing fans',
                path: '/',
                icon: InsertPhotoOutlinedIcon,
            }
        ]
    },
    {
        title: 'more',
        path: '/',
        heading: 'more from us',
    
        dropdown: [
            { 
                title: 'blog',
                info: 'insights from velocita',
                path: '/',
                icon: BookOutlinedIcon,
    
            },
            { 
                title: 'podcast',
                info: 'racing journey podcast',
                path: '/',
                icon: RadioOutlinedIcon,
            },
            { 
                title: 'events',
                info: 'explore the fun',
                path: '/',
                icon: EventAvailableOutlinedIcon,
            }
        ]
    },
    {
        title: 'connect',
        path: '/',
        heading: 'get in touch',
    
        dropdown: [
            { 
                title: 'contact',
                info: 'Reach out to us',
                path: '/connect/contact-us/',
                icon: EventAvailableOutlinedIcon,
            },
            { 
                title: 'newsletter',
                info: 'new evety month',
                path: '/connect/newsletter/',
                icon: EventAvailableOutlinedIcon,
            }
        ]
    }
];