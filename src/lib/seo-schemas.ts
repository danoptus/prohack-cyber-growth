const SITE_URL = "https://prohack.com.br";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "ProHack",
  alternateName: "ProHack Cybersecurity",
  description: "Consultoria especializada em cybersecurity com foco em resultados mensuráveis para empresas",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/og-image.png`,
  sameAs: ["https://linkedin.com/company/prohack"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-11-95551-3834",
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: ["Portuguese", "English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-11-95551-3834",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese", "English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "São Paulo",
    addressRegion: "SP",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "ProHack Cybersecurity",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["pt-BR", "en", "es", "fr", "it"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    serviceType: "Cybersecurity Consulting",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "ProHack Cybersecurity",
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    telephone: "+55-11-95551-3834",
    email: "contato@prohack.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Penetration Testing",
            description: "Comprehensive penetration testing with executive and technical reports",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SOC - Security Operations Center",
            description: "24/7 cybersecurity monitoring and incident detection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Incident Response",
            description: "Rapid and effective response to security incidents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "vCISO",
            description: "Virtual CISO for security governance and strategic management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vulnerability Management",
            description: "Continuous vulnerability scanning and risk prioritization",
          },
        },
      ],
    },
  };
}
