import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://prohack.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const langToLocale: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  it: "it_IT",
};

const hreflangMap: Record<string, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  fr: "fr",
  it: "it",
};

const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  jsonLd,
}: SEOHeadProps) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || "pt";
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const fullTitle = title.includes("ProHack") ? title : `${title} | ProHack Cybersecurity`;

  return (
    <Helmet>
      <html lang={currentLang === "pt" ? "pt-BR" : currentLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang alternates for multilingual SEO */}
      {Object.entries(hreflangMap).map(([lang, hreflang]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={hreflang}
          href={`${SITE_URL}${location.pathname}${lang !== "pt" ? `?lang=${lang}` : ""}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="ProHack Cybersecurity" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={langToLocale[currentLang] || "pt_BR"} />
      {Object.entries(langToLocale)
        .filter(([lang]) => lang !== currentLang)
        .map(([lang, locale]) => (
          <meta key={lang} property="og:locale:alternate" content={locale} />
        ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO meta */}
      <meta name="author" content="ProHack" />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
