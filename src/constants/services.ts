// Services data - all services offered by Dovey Nails Lounge

export interface Service {
    name: string;
    description: string;
    price?: string;
}

export interface ServiceCategory {
    title: string;
    description: string;
    services: Service[];
}

export const NAIL_SERVICES: Service[] = [
    { name: 'Acrylic Nails', description: 'Long-lasting, durable nail extensions', price: 'From ₦15,000' },
    { name: 'Nail Art', description: 'Custom artistic designs', price: 'From ₦5,000' },
    { name: 'Polish Nails', description: 'Classic manicure finish', price: 'From ₦3,000' },
    { name: 'French Tips', description: 'Timeless elegance', price: 'From ₦8,000' },
    { name: 'Gel X Nails', description: 'Soft gel extensions', price: 'From ₦18,000' },
    { name: 'Press-on Nails', description: 'Quick & beautiful', price: 'From ₦10,000' },
    { name: 'Pedicure', description: 'Complete foot care', price: 'From ₦8,000' },
    { name: 'Manicure', description: 'Hand & nail perfection', price: 'From ₦5,000' },
];

export const BEAUTY_SERVICES: Service[] = [
    { name: 'Lash Extensions', description: 'Fuller, longer lashes', price: 'From ₦20,000' },
    { name: 'Permanent Brows', description: 'Defined, lasting brows', price: 'From ₦50,000' },
    { name: 'Lip Blushing', description: 'Natural lip enhancement', price: 'From ₦45,000' },
    { name: 'Makeup', description: 'Professional artistry', price: 'From ₦25,000' },
    { name: 'Gele Tying', description: 'Traditional headwrap styling', price: 'From ₦10,000' },
];

export const BODY_ART_SERVICES: Service[] = [
    { name: 'Tattoos', description: 'Permanent body art', price: 'From ₦20,000' },
    { name: 'Piercings', description: 'Professional body piercings', price: 'From ₦5,000' },
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
