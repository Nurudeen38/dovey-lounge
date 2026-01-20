// Route definitions for Dovey Nails Lounge
export const ROUTES = {
    HOME: '/',
    SERVICES: '/services',
    ABOUT: '/about',
    GALLERY: '/gallery',
    CONTACT: '/contact',
} as const;

export const NAV_LINKS = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Services', path: ROUTES.SERVICES },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Gallery', path: ROUTES.GALLERY },
    { label: 'Contact', path: ROUTES.CONTACT },
];
