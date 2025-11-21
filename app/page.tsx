import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://emmanueloking.com/#pricing",
    name: "Interactive 3D Website Pricing",
    description: "Interactive 3D animated website development starting at $999",
    url: "https://emmanueloking.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Interactive 3D Website Development",
      description: "Professional interactive 3D animated website development services",
      offers: [
        {
          "@type": "Offer",
          name: "Interactive 3D Website",
          price: "999",
          priceCurrency: "USD",
          description: "Complete interactive 3D website with custom animations and responsive design",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://emmanueloking.com/",
    name: "Emmanuel O. King | Interactive 3D Websites That Convert",
    description:
      "Transform your brand with stunning interactive 3D animated websites. Professional 3D web development starting at $999.",
    url: "https://emmanueloking.com/",
    mainEntity: {
      "@type": "Person",
      name: "Emmanuel O. King",
      url: "https://emmanueloking.com",
      sameAs: [
        "https://wa.me/447877417446",
        "https://twitter.com/emmanueloking",
        "https://www.youtube.com/@emmanueloking",
        "https://instagram.com/emmanueloking",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://emmanueloking.com/#pricing",
        name: "Pricing Section",
        url: "https://emmanueloking.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
