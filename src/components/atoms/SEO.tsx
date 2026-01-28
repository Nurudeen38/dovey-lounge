import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const siteTitle = "Dovey's Nail Lounge | Luxury Nail Spa in Abuja";
    const defaultKeywords = "doveysnaillounge, dovey lounge, nails in dawaki, nail salon abuja, beauty spa abuja, manicure abuja, pedicure dawaki";
    const fullTitle = title ? `${title} | Dovey's Nail Lounge` : siteTitle;
    const metaImage = image || '/logo.png'; // Assuming logo or a default OG image exists, update path as needed
    const metaUrl = url || 'https://doveylounge.com'; // Replace with actual domain

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={`${defaultKeywords}, ${keywords || ''}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
