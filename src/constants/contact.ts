// Contact information and business data
import { ReactNode } from 'react';

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

export const ADDRESS = 'Behind Sunitem Supermarket, News Engineering Road, Dawaki, Abuja';
export const PHONE = '08152543551';
export const EMAIL = 'info@doveynails.com';

export const SOCIAL_HANDLE = '@doveysnailounge';

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: 'Instagram', url: 'https://instagram.com/doveysnailounge', handle: SOCIAL_HANDLE },
    { platform: 'Facebook', url: 'https://facebook.com/doveysnailounge', handle: SOCIAL_HANDLE },
    { platform: 'Twitter', url: 'https://twitter.com/doveysnailounge', handle: SOCIAL_HANDLE },
    { platform: 'TikTok', url: 'https://tiktok.com/@doveysnailounge', handle: SOCIAL_HANDLE },
];

export const BUSINESS_HOURS: BusinessHours[] = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' },
];

// Formspree
export const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_ID'; // TODO: Replace with actual form ID
