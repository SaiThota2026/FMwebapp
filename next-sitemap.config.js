/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.facilitiesman.com.au",
  generateRobotsTxt: true,
  exclude: ["/privacy-policy", "/icon.png", "/apple-icon.png"],
  robotsTxtOptions: {
    // Public marketing site: explicitly allow major AI / search agents to crawl.
    // Disallow only reserved app paths (no public routes there today).
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
    ],
    additionalSitemaps: [],
    transformRobotsTxt: async (_, robotsTxt) => {
      const extras = [
        "",
        "# AI agent discovery maps",
        "# Host",
        "Host: https://www.facilitiesman.com.au",
        "",
        "# LLM / agent entrypoints (not access-control; see policies above)",
        "# llms.txt — https://www.facilitiesman.com.au/llms.txt",
        "# llms-full.txt — https://www.facilitiesman.com.au/llms-full.txt",
        "# site-index.json — https://www.facilitiesman.com.au/site-index.json",
        "# HTML sitemap — https://www.facilitiesman.com.au/sitemap/",
      ].join("\n");
      return `${robotsTxt}${extras}\n`;
    },
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
