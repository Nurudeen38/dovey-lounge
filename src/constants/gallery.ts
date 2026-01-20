// Gallery data

export interface GalleryItem {
    id: number;
    category: 'nails' | 'beauty' | 'bodyart';
    title: string;
    color: string;
    imageUrl?: string;
}

export interface GalleryCategory {
    value: string;
    label: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
    { value: 'all', label: 'All Work' },
    { value: 'nails', label: 'Nails' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'bodyart', label: 'Body Art' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1, category: 'nails', title: 'Acrylic Set', color: '#FFB6C1' },
    { id: 2, category: 'nails', title: 'Nail Art', color: '#DDA0DD' },
    { id: 3, category: 'nails', title: 'French Tips', color: '#F5DEB3' },
    { id: 4, category: 'nails', title: 'Gel X Design', color: '#E6E6FA' },
    { id: 5, category: 'nails', title: 'Chrome Nails', color: '#C9A962' },
    { id: 6, category: 'nails', title: 'Ombre Set', color: '#FFE4E1' },
    { id: 7, category: 'beauty', title: 'Lash Extensions', color: '#2D5A4A' },
    { id: 8, category: 'beauty', title: 'Brow Work', color: '#8B7355' },
    { id: 9, category: 'beauty', title: 'Makeup Look', color: '#CD853F' },
    { id: 10, category: 'beauty', title: 'Lip Blush', color: '#DB7093' },
    { id: 11, category: 'bodyart', title: 'Tattoo Art', color: '#1a1a1a' },
    { id: 12, category: 'bodyart', title: 'Piercing', color: '#708090' },
];
