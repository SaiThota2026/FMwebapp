/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.facilitiesman.com.au",
  generateRobotsTxt: true,
  exclude: ["/privacy-policy", "/icon.png", "/apple-icon.png"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin/"] },
    ],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const loc = path.endsWith("/") ? path : `${path}/`;
    const lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (loc === "/") {
      return { loc, changefreq: "weekly", priority: 1.0, lastmod };
    }
    if (loc.startsWith("/services/") && loc !== "/services/") {
      return { loc, changefreq: "weekly", priority: 0.8, lastmod };
    }
    if (loc.startsWith("/locations/")) {
      return { loc, changefreq: "weekly", priority: 0.8, lastmod };
    }
    if (loc === "/faq/") {
      return { loc, changefreq: "monthly", priority: 0.6, lastmod };
    }
    return { loc, changefreq: config.changefreq, priority: config.priority, lastmod };
  },
};
