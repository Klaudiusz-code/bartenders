import type { MetadataRoute } from "next";

const SITE_URL = "https://www.brothers-bartenders.pl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/wp-admin/",
        "/wp-login.php",
        "/wp-content/",
        "/wp-includes/",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}