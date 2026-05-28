export const SITE = {
  name: "FACILITIES MAN",
  logoPath: "/images/brand/facilities-man-logo.png",
  logoUrl:
    "https://www.facilitiesman.com.au/images/brand/facilities-man-logo.png",
  faviconPath: "/images/brand/facilities-man-favicon.png",
  tagline: "BUILT FOR THE PLACES PEOPLE WORK AND LIVE",
  abn: "72 697 453 937",
  phone: "+61450924377",
  phoneDisplay: "0450 924 377",
  email: "support@facilitiesman.com.au",
  url: "https://www.facilitiesman.com.au",
  address: "Newcastle, NSW, Australia",
  tradingHours: "Monday–Saturday, 7am–7pm",
  ga4Id: "G-D26DLPW4CN",
  geo: { lat: -32.9283, lng: 151.7817 },
} as const;

export const SERVICES = [
  { name: "Commercial Cleaning", href: "/services/commercial-cleaning/", slug: "commercial-cleaning" },
  { name: "Strata Cleaning", href: "/services/strata-cleaning/", slug: "strata-cleaning" },
  { name: "Facilities Management", href: "/services/facilities-management/", slug: "facilities-management" },
  { name: "Office Cleaning", href: "/services/office-cleaning/", slug: "office-cleaning" },
  { name: "Grounds & Garden Maintenance", href: "/services/grounds-maintenance/", slug: "grounds-maintenance" },
  { name: "Industrial Cleaning", href: "/services/industrial-cleaning/", slug: "industrial-cleaning" },
  { name: "Healthcare & Medical Cleaning", href: "/services/medical-cleaning/", slug: "medical-cleaning" },
  { name: "Childcare Centre Cleaning", href: "/services/childcare-cleaning/", slug: "childcare-cleaning" },
  { name: "Window Cleaning", href: "/services/window-cleaning/", slug: "window-cleaning" },
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning/", slug: "carpet-cleaning" },
  { name: "Pressure Washing & Exterior Cleaning", href: "/services/pressure-washing/", slug: "pressure-washing" },
  { name: "Warehouse Cleaning", href: "/services/warehouse-cleaning/", slug: "warehouse-cleaning" },
  { name: "Sanitary & Washroom Services", href: "/services/sanitary-washroom-services/", slug: "sanitary-washroom-services" },
  { name: "Maintenance & Trades", href: "/services/maintenance-trades/", slug: "maintenance-trades" },
] as const;

export const LOCATIONS = [
  { name: "Newcastle", href: "/locations/newcastle/" },
  { name: "Maitland", href: "/locations/maitland/" },
  { name: "Lake Macquarie", href: "/locations/lake-macquarie/" },
  { name: "Hunter Valley", href: "/locations/hunter-valley/" },
  { name: "Central Coast", href: "/locations/central-coast/" },
  { name: "Cessnock", href: "/locations/cessnock/" },
  { name: "Nelson Bay & Port Stephens", href: "/locations/port-stephens/" },
  { name: "Singleton", href: "/locations/singleton/" },
  { name: "Muswellbrook", href: "/locations/muswellbrook/" },
] as const;

export const INDUSTRIES = [
  { name: "Strata & Body Corporate", href: "/industries/strata-body-corporate/", slug: "strata-body-corporate" },
  { name: "Healthcare Facilities", href: "/industries/healthcare/", slug: "healthcare" },
  { name: "Education & Childcare", href: "/industries/education-childcare/", slug: "education-childcare" },
  { name: "Commercial Property", href: "/industries/commercial-property/", slug: "commercial-property" },
  { name: "Government & Council", href: "/industries/government/", slug: "government" },
] as const;

export const COMPANY_LINKS = [
  { name: "About Us", href: "/about/" },
  { name: "Contact & Quote", href: "/contact/" },
  { name: "FAQ", href: "/faq/" },
  { name: "Blog", href: "/blog/" },
  { name: "Strata & Body Corporate", href: "/industries/strata-body-corporate/", group: "Industries" },
  { name: "Healthcare Facilities", href: "/industries/healthcare/", group: "Industries" },
  { name: "Education & Childcare", href: "/industries/education-childcare/", group: "Industries" },
  { name: "Commercial Property", href: "/industries/commercial-property/", group: "Industries" },
  { name: "Government & Council", href: "/industries/government/", group: "Industries" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Sitemap", href: "/sitemap.xml" },
] as const;
