import type { Metadata } from 'next'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import { SEO_KEYWORDS, SMASH_6000_KEYWORDS, SOLO_1800_KEYWORDS, SLAM_2300_KEYWORDS, MIRROR_4500_KEYWORDS, SOFIT_FA4500_KEYWORDS, SOPRO_PA7000_KEYWORDS, DM_8000_KEYWORDS, DM_8000I_KEYWORDS, SOPRO_10000_KEYWORDS, SOPRO_PA10000_KEYWORDS, XLAND_15000_KEYWORDS, SOPRO_20000_KEYWORDS, JUPITER_30000_KEYWORDS, XLAND_SPIKE_35000_KEYWORDS, BLAST_38000_KEYWORDS, BURST_41000_KEYWORDS, ET_CYBER_35000_KEYWORDS, WAKA_LIQUID_KEYWORDS } from "./seo-keywords";
import { getWebSiteLDJson, getProductsLDJson } from "./lib/ld-json";
import { products } from "./products-data";

export const metadata = {
  title: "Официальный дистрибьютер WAKA. Вкусы, устройства, партнёрство",
  description: "Оптовая продажа и дистрибьюция WAKA. Огромная коллекция вкусов и устройств. Партнёрство, проверка подлинности, акции.",
  keywords: [
    ...SEO_KEYWORDS,
    ...SMASH_6000_KEYWORDS,
    ...SOLO_1800_KEYWORDS,
    ...SLAM_2300_KEYWORDS,
    ...MIRROR_4500_KEYWORDS,
    ...SOFIT_FA4500_KEYWORDS,
    ...SOPRO_PA7000_KEYWORDS,
    ...DM_8000_KEYWORDS,
    ...DM_8000I_KEYWORDS,
    ...SOPRO_10000_KEYWORDS,
    ...SOPRO_PA10000_KEYWORDS,
    ...XLAND_15000_KEYWORDS,
    ...SOPRO_20000_KEYWORDS,
    ...JUPITER_30000_KEYWORDS,
    ...XLAND_SPIKE_35000_KEYWORDS,
    ...BLAST_38000_KEYWORDS,
    ...BURST_41000_KEYWORDS,
    ...ET_CYBER_35000_KEYWORDS,
    ...WAKA_LIQUID_KEYWORDS,
  ],
  openGraph: {
    title: "Официальный дистрибьютер WAKA",
    description: "Оптовая продажа и дистрибьюция WAKA. Партнёрство, проверка подлинности, акции.",
    url: "https://example.com",
    siteName: "WAKA — официальный дистрибьютер",
    images: [
      {
        url: "/waka_blue_logo.png",
        width: 512,
        height: 512,
        alt: "WAKA — официальный дистрибьютер",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

const robotoMono = Roboto_Mono({ weight: ['400', '700'], subsets: ['cyrillic', 'latin'], display: 'swap', variable: '--font-roboto-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = "https://example.com";
  const webSiteLD = getWebSiteLDJson({ url: siteUrl, name: "WAKA — официальный дистрибьютер" });
  const productsLD = getProductsLDJson(products, siteUrl);
  return (
    <html lang="en" className={robotoMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLD) }}
        />
        {productsLD.map((product: object, idx: number) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )}
