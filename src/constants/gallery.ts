import acrylicNailsImg from '@/assets/images/acrylic_nails.jpg';
import frenchTipsImg from '@/assets/images/french_tips.jpg';
import gelXImg from '@/assets/images/gen_x_nails.jpg';
import nailArtImg from '@/assets/images/nail_art_nails.jpeg';
import polishImg from '@/assets/images/polish_nails.jpg';
import pressOnImg from '@/assets/images/press_on_nails.jpg';
import makeupImg from '@/assets/images/makeup.jpeg';
import tattooImg from '@/assets/images/tatoo.PNG';
import piercingImg from '@/assets/images/piercing.jpeg';
import browWorkImg from '@/assets/images/brow_work.PNG';
import lashExtImg from '@/assets/images/lash_extension.jpeg';
import lipBlushImg from '@/assets/images/lip_blush.WEBP';


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
    { id: 1, category: 'nails', title: 'Acrylic Set', color: '#FFB6C1', imageUrl: acrylicNailsImg },
    { id: 2, category: 'nails', title: 'Nail Art', color: '#DDA0DD', imageUrl: nailArtImg },
    { id: 3, category: 'nails', title: 'French Tips', color: '#F5DEB3', imageUrl: frenchTipsImg },
    { id: 4, category: 'nails', title: 'Gel X Design', color: '#E6E6FA', imageUrl: gelXImg },
    { id: 5, category: 'nails', title: 'Chrome Nails', color: '#C9A962', imageUrl: polishImg },
    { id: 6, category: 'nails', title: 'Press-on Nails', color: '#FFE4E1', imageUrl: pressOnImg },
    { id: 7, category: 'beauty', title: 'Lash Extensions', color: '#2D5A4A', imageUrl: lashExtImg },
    { id: 8, category: 'beauty', title: 'Brow Work', color: '#8B7355', imageUrl: browWorkImg },
    { id: 9, category: 'beauty', title: 'Makeup Look', color: '#CD853F', imageUrl: makeupImg },
    { id: 10, category: 'beauty', title: 'Lip Blush', color: '#DB7093', imageUrl: lipBlushImg },
    { id: 11, category: 'bodyart', title: 'Tattoo Art', color: '#1a1a1a', imageUrl: tattooImg },
    { id: 12, category: 'bodyart', title: 'Piercing', color: '#708090', imageUrl: piercingImg },
];
