export interface Service {
    name: string;
    description: string;
    price?: string;
    image?: string;
}

// Images
import acrylicNailsImg from '@/assets/images/acrylic_nails.jpg';
import frenchTipsImg from '@/assets/images/french_tips.jpg';
import gelXImg from '@/assets/images/gen_x_nails.jpg';
import nailArtImg from '@/assets/images/nail_art_nails.jpeg';
import polishImg from '@/assets/images/polish_nails.jpg';
import pressOnImg from '@/assets/images/press_on_nails.jpg';
import pedicureImg from '@/assets/images/pedicure_nails.jpg';

import manicureImg from '@/assets/images/manicure_nails.jpeg';
import makeupImg from '@/assets/images/makeup.jpeg';
import geleImg from '@/assets/images/gele.jpeg';
import tattooImg from '@/assets/images/tatoo.PNG';
import piercingImg from '@/assets/images/piercing.jpeg';
import browWorkImg from '@/assets/images/brow_work.PNG';
import lashExtImg from '@/assets/images/lash_extension.jpeg';
import lipBlushImg from '@/assets/images/lip_blush.WEBP';

export interface ServiceCategory {
    title: string;
    description: string;
    services: Service[];
}

export const NAIL_SERVICES: Service[] = [
    { name: 'Acrylic Nails', description: 'Long-lasting, durable nail extensions', price: 'From ₦15,000', image: acrylicNailsImg },
    { name: 'Nail Art', description: 'Custom artistic designs', price: 'From ₦5,000', image: nailArtImg },
    { name: 'Polish Nails', description: 'Classic manicure finish', price: 'From ₦3,000', image: polishImg },
    { name: 'French Tips', description: 'Timeless elegance', price: 'From ₦10,000', image: frenchTipsImg },
    { name: 'Gel X Nails', description: 'Soft gel extensions', price: 'From ₦15,000', image: gelXImg },
    { name: 'Press-on Nails', description: 'Quick & beautiful', price: 'From ₦8,000', image: pressOnImg },
    { name: 'Pedicure', description: 'Complete foot care', price: 'From ₦10,000', image: pedicureImg },
    { name: 'Manicure', description: 'Hand & nail perfection', price: 'From ₦5,000', image: manicureImg },
];

export const BEAUTY_SERVICES: Service[] = [
    { name: 'Lash Extensions', description: 'Fuller, longer lashes', price: 'From ₦20,000', image: lashExtImg },
    { name: 'Permanent Brows', description: 'Defined, lasting brows', price: 'From ₦50,000', image: browWorkImg },
    { name: 'Lip Blushing', description: 'Natural lip enhancement', price: 'From ₦45,000', image: lipBlushImg },
    { name: 'Makeup', description: 'Professional artistry', price: 'From ₦25,000', image: makeupImg },
    { name: 'Gele Tying', description: 'Traditional headwrap styling', price: 'From ₦10,000', image: geleImg },
];

export const BODY_ART_SERVICES: Service[] = [
    { name: 'Tattoos', description: 'Permanent body art', price: 'From ₦20,000', image: tattooImg },
    { name: 'Piercings', description: 'Professional body piercings', price: 'From ₦5,000', image: piercingImg },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        title: 'Nail Services',
        description: 'Expert nail care and artistic designs',
        services: NAIL_SERVICES,
    },
    {
        title: 'Beauty Services',
        description: 'Enhance your natural beauty',
        services: BEAUTY_SERVICES,
    },
    {
        title: 'Body Art',
        description: 'Express yourself with permanent art',
        services: BODY_ART_SERVICES,
    },
];

// Preview services for home page (first 4 nail services)
export const HOME_PREVIEW_SERVICES = NAIL_SERVICES.slice(0, 4);
