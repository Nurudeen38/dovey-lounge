import type { ReactNode } from 'react';

export interface ContactInfo {
    label: string;
    value: string;
    icon?: ReactNode;
    href?: string;
}

export interface BusinessHours {
    day: string;
    hours: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    handle: string;
}

// Business Details
export const BUSINESS_NAME = "Dovey's Nail Lounge";
export const BUSINESS_TAGLINE = 'Luxury nail spa and beauty lounge. Where elegance meets artistry.';

export const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir//Dovey's+Nail+Lounge,+Shop+C7,+2nd+Floor,+Adunni+Mall,+Chibok+Rd,+off+News+Engineering,+Dawaki,+Abuja+900221,+Federal+Capital+Territory/@9.1230773,7.3903125,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104ddfff9a19efb1:0xe0a86c97475cf4d6!2m2!1d7.4000293!2d9.1258386?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
export const ADDRESS = 'Behind Sunitem Supermarket, News Engineering Road, Dawaki, Abuja';
export const PHONE = '08152543551';
export const EMAIL = 'info@doveynails.com';

export const SOCIAL_HANDLE = '@doveynaillounge';

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: 'Instagram', url: 'https://instagram.com/doveynaillounge', handle: SOCIAL_HANDLE },
    { platform: 'Facebook', url: 'https://facebook.com/doveynaillounge', handle: SOCIAL_HANDLE },
    { platform: 'Twitter', url: 'https://twitter.com/doveynaillounge', handle: SOCIAL_HANDLE },
    { platform: 'TikTok', url: 'https://tiktok.com/@doveysnail', handle: SOCIAL_HANDLE },
];

export const BUSINESS_HOURS: BusinessHours[] = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' },
];
