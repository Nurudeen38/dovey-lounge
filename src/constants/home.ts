
export interface HeroSlideMedia {
    type: 'image' | 'video';
    src: string;
    poster?: string;
}

export const HERO_SLIDES: HeroSlideMedia[] = [
    { type: 'video', src: '/assets/video_1.mp4', poster: '/assets/nail_parlour.jpg' },
    { type: 'video', src: '/assets/video_2.mp4', poster: '/assets/nail_parlour.jpg' },
    { type: 'image', src: '/assets/guest_reception.jpg' },
    { type: 'image', src: '/assets/saloon_entrance.jpg' },
    { type: 'image', src: '/assets/nail_parlour.jpg' },
];