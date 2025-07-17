// LD+JSON генерация для SEO

export function getWebSiteLDJson({ url, name }: { url: string; name: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
  };
}

export function getProductsLDJson(products: Array<{ name: string; description: string; image: string; puffs?: string }>, siteUrl: string) {
  return products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": siteUrl + product.image,
    ...(product.puffs ? { "mpn": product.puffs } : {}),
    "brand": {
      "@type": "Brand",
      "name": "WAKA"
    },
    "offers": {
      "@type": "Offer",
      "url": siteUrl,
      "priceCurrency": "RUB",
    }
  }));
} 