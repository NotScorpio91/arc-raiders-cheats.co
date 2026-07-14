import { SITE, SITE_LOGO_URL } from './site';
import { ORGANIZATION_SOCIAL_IMAGE } from './social-images';
import type { PricingPlan } from './pricing';
import { highestPrice, lowestPrice } from './pricing';

function organizationLogo() {
  return {
    '@type': 'ImageObject',
    url: SITE_LOGO_URL,
    contentUrl: SITE_LOGO_URL,
    width: 256,
    height: 300,
    caption: SITE.name,
  };
}

function socialImageObject(src: string, alt: string, width?: number, height?: number) {
  return {
    '@type': 'ImageObject',
    url: src,
    contentUrl: src,
    ...(alt ? { caption: alt, name: alt } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
}

function brandObject() {
  return {
    '@type': 'Brand',
    name: SITE.name,
  };
}

function offerFromPlan(plan: PricingPlan, url: string) {
  return {
    '@type': 'Offer',
    url,
    price: plan.price.toFixed(2),
    priceCurrency: plan.currency,
    availability: 'https://schema.org/InStock',
    seller: publisherOrganization(),
    name: plan.label,
  };
}

function offersFromPlans(plans: PricingPlan[], url: string) {
  if (plans.length === 1) {
    return offerFromPlan(plans[0], url);
  }

  return {
    '@type': 'AggregateOffer',
    lowPrice: lowestPrice(plans).toFixed(2),
    highPrice: highestPrice(plans).toFixed(2),
    priceCurrency: plans[0].currency,
    offerCount: plans.length,
    offers: plans.map((plan) => offerFromPlan(plan, url)),
  };
}

function publisherOrganization() {
  return {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: organizationLogo(),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    alternateName: ['Arc Raiders Cheats', 'Arc Raiders Hack', 'Arc Raiders Hacks', 'Arc Raiders ESP', 'Arc Raiders Aimbot'],
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.locale.replace('_', '-'),
    image: socialImageObject(
      ORGANIZATION_SOCIAL_IMAGE.src,
      ORGANIZATION_SOCIAL_IMAGE.alt,
      ORGANIZATION_SOCIAL_IMAGE.width,
      ORGANIZATION_SOCIAL_IMAGE.height,
    ),
    publisher: publisherOrganization(),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: ['Arc Raiders Cheats', 'Arc Raiders Hack', 'Arc Raiders ESP'],
    url: SITE.url,
    description: SITE.description,
    logo: organizationLogo(),
    image: socialImageObject(
      ORGANIZATION_SOCIAL_IMAGE.src,
      ORGANIZATION_SOCIAL_IMAGE.alt,
      ORGANIZATION_SOCIAL_IMAGE.width,
      ORGANIZATION_SOCIAL_IMAGE.height,
    ),
    sameAs: [SITE.url],
  };
}

export function webPageSchema(props: {
  name: string;
  description: string;
  url: string;
  image: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const imageObject = socialImageObject(
    props.image,
    props.imageAlt ?? 'ARC Raiders gameplay screenshot',
    props.imageWidth,
    props.imageHeight,
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.name,
    description: props.description,
    url: props.url,
    image: imageObject,
    primaryImageOfPage: imageObject,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[], image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(image ? { image: socialImageObject(image, 'ARC Raiders gameplay screenshot') } : {}),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(props: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
  imageAlt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    ...(props.image
      ? { image: [socialImageObject(props.image, props.imageAlt ?? props.title)] }
      : {}),
    author: {
      '@type': 'Person',
      name: props.author ?? SITE.author,
    },
    publisher: publisherOrganization(),
  };
}

export function blogPostingSchema(props: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    ...(props.image
      ? {
          image: [
            socialImageObject(props.image, props.imageAlt ?? props.title),
          ],
        }
      : {}),
    ...(props.keywords?.length ? { keywords: props.keywords.join(', ') } : {}),
    author: {
      '@type': 'Person',
      name: props.author ?? SITE.author,
    },
    publisher: publisherOrganization(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
    },
  };
}

export function collectionPageSchema(props: {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: props.title,
    description: props.description,
    url: props.url,
    ...(props.image
      ? {
          image: socialImageObject(props.image, props.imageAlt ?? props.title),
          primaryImageOfPage: socialImageObject(
            props.image,
            props.imageAlt ?? props.title,
          ),
        }
      : {}),
  };
}

export function contactPageSchema(image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Arc Raiders Cheats',
    url: `${SITE.url}/contact/`,
    description: 'Get in touch with the Arc Raiders Cheats team for support, product inquiries, and feedback.',
    ...(image ? { image: socialImageObject(image, 'ARC Raiders gameplay screenshot') } : {}),
  };
}

export function itemListSchema(
  items: { name: string; url: string; description: string; pricingPlans?: PricingPlan[] }[],
  itemType: 'SoftwareApplication' | 'Product' = 'SoftwareApplication',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': itemType,
        name: item.name,
        url: item.url,
        description: item.description,
        ...(item.pricingPlans?.length
          ? { offers: offersFromPlans(item.pricingPlans, item.url) }
          : {
              offers: {
                '@type': 'Offer',
                url: item.url,
                price: '35.00',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
            }),
      },
    })),
  };
}

export function softwareApplicationSchema(props: {
  name: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  operatingSystem?: string;
  featureList?: string[];
  pricingPlans?: PricingPlan[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: props.name,
    description: props.description,
    url: props.url,
    applicationCategory: props.category ?? 'GameApplication',
    applicationSubCategory: 'Game Enhancement Software',
    operatingSystem: props.operatingSystem ?? 'Windows 10, Windows 11',
    ...(props.image
      ? { image: socialImageObject(props.image, props.imageAlt ?? props.name) }
      : {}),
    ...(props.featureList?.length ? { featureList: props.featureList.join(', ') } : {}),
    ...(props.pricingPlans?.length
      ? { offers: offersFromPlans(props.pricingPlans, props.url) }
      : {
          offers: {
            '@type': 'Offer',
            url: props.url,
            price: '0.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }),
    provider: publisherOrganization(),
  };
}

/** Homepage aggregate SoftwareApplication representing the full Arc Raiders Cheats stack. */
export function homepageSoftwareApplicationSchema(image?: string, pricingPlans?: PricingPlan[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ARC Raiders Cheats & Hacks',
    alternateName: [
      'Arc Raiders Hack',
      'Arc Raiders Hacks',
      'Arc Raiders Wallhack',
      'Arc Raiders ESP',
      'Arc Raiders Aimbot',
      'ArcRaidersCheats',
    ],
    url: SITE.url,
    applicationCategory: 'GameApplication',
    applicationSubCategory: 'Game Enhancement Software',
    operatingSystem: 'Windows 10, Windows 11',
    softwareVersion: '2026',
    releaseNotes:
      'Updated for recent Arc Raiders patches. External overlay stack with aimbot, wallhack ESP, loot radar, 2D radar, and extraction intel.',
    ...(image ? { image: socialImageObject(image, 'ARC Raiders Cheats & Hacks — Aimbot, Wallhack & Radar') } : {}),
    ...(pricingPlans?.length
      ? { offers: offersFromPlans(pricingPlans, `${SITE.url}/cheats/`) }
      : {
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '35.00',
            highPrice: '150.00',
            priceCurrency: 'USD',
            offerCount: 2,
            url: `${SITE.url}/cheats/`,
          },
        }),
    description:
      'ARC Raiders cheats and hacks with aimbot, wallhack ESP, loot radar, and 2D extraction intel. Xray, Pro, and Private packages with documented setup and patch-aware support.',
    featureList:
      'Player ESP, Loot ESP, Drone ESP, Skeleton ESP, Health & Armor Bars, Distance Readout, Aimbot, Bone Targeting, Aim Smoothing, Custom FOV, 2D Radar Hack, Extraction Zone ESP, ARC Patrol ESP, Stream-Safe Mode, HWID Spoofer',
  };
}

export function productSchema(props: {
  name: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  category?: string;
  sku?: string;
  pricingPlans?: PricingPlan[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    url: props.url,
    ...(props.sku ? { sku: props.sku } : {}),
    ...(props.category ? { category: props.category } : {}),
    ...(props.image
      ? { image: socialImageObject(props.image, props.imageAlt ?? props.name) }
      : {}),
    brand: brandObject(),
    ...(props.pricingPlans?.length
      ? { offers: offersFromPlans(props.pricingPlans, props.url) }
      : {
          offers: {
            '@type': 'Offer',
            url: props.url,
            price: '35.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }),
  };
}
