// Centralized site data — used across nav, footer, schema, CTAs
// Spray Insurance — specialized coverage for spray trade contractors

export const SITE = {
  name: "Spray Insurance",
  legalName: "Spray Insurance (by Contractors Choice Agency)",
  domain: "sprayinsurance.com",
  url: "https://sprayinsurance.com",
  tagline: "Spray Fast. Stay Covered.",
  description:
    "Specialized insurance for all spray trade contractors — spray foam, polyurea, sealcoating, line striping, spray coatings, and EIFS. GL, pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, and inland marine. All 50 states. 15-minute quotes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Spray",
  brandSub: "Contractor Insurance",
  nicheShort: "spray contractor",
  nicheShortCap: "Spray Contractor",
  nichePlural: "spray contractors",
  nichePluralCap: "Spray Contractors",
  operator: "spray operation",
  operatorCap: "Spray Operation",
  industry: "spray trade contracting",
  industryCap: "Spray Trade Contracting",
  audience: "spray applicators",
  audienceCap: "Spray Applicators",
  ownerTitle: "spray contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Spray Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability for Spray Contractors",
    short: "Overspray, property damage, completed operations",
    description:
      "The foundational coverage every spray contractor needs. Protects against third-party bodily injury and property damage claims arising from overspray, completed operations failures, and on-site incidents across all spray trades — foam, polyurea, sealcoating, line striping, coatings, and EIFS.",
    icon: "ShieldCheck",
    featured: true,
    keywords: ["spray contractor general liability", "spray foam insurance", "overspray liability", "spray contractor GL"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "VOC drift, chemical exposure, overspray incidents",
    description:
      "Standard GL excludes most pollution claims. CPL fills the gap — covering VOC drift, chemical exposure, overspray to adjacent property, coal tar sealcoating liability, and environmental cleanup costs specific to spray trade operations.",
    icon: "Droplets",
    featured: false,
    keywords: ["contractor pollution liability", "spray foam VOC insurance", "sealcoating pollution liability", "overspray chemical insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Proper class codes for spray trades",
    description:
      "Coverage for the real injury patterns in spray work — respiratory exposure, chemical burns, fall hazards on roofs and scaffolding, and equipment accidents. We use the correct class codes for foam applicators, polyurea crews, sealcoating operators, and line stripers.",
    icon: "HardHat",
    featured: false,
    keywords: ["spray contractor workers comp", "spray foam workers compensation", "sealcoating workers comp class codes", "spray applicator injury insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Spray Rigs",
    short: "Spray rigs, proportioners, work trucks",
    description:
      "Coverage for your spray rigs, proportioner trucks, service vehicles, and tow vehicles on public roads — including hired and non-owned auto. Built for the mobile nature of spray contractor operations across multiple job sites.",
    icon: "Truck",
    featured: false,
    keywords: ["spray rig insurance", "commercial auto spray contractor", "proportioner truck insurance", "spray foam rig coverage"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Proportioners, guns, hoses, and sprayers",
    description:
      "Inland marine coverage for the expensive portable equipment spray contractors depend on — proportioners, spray guns, heated hoses, transfer pumps, generators, and application equipment — whether on a job site, in transit, or at your shop.",
    icon: "Wrench",
    featured: false,
    keywords: ["spray contractor tools equipment insurance", "proportioner insurance", "spray foam equipment coverage", "contractor tools inland marine"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Extra liability above your primary limits",
    description:
      "Extends your GL and commercial auto limits when a large overspray claim, completed-operations lawsuit, or multi-party incident exceeds your base policy. Essential for spray contractors working on commercial projects or multi-family structures.",
    icon: "Umbrella",
    featured: false,
    keywords: ["spray contractor umbrella insurance", "commercial umbrella spray trades", "excess liability spray contractor"],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine Coverage",
    short: "Equipment in transit, on-site, and at storage",
    description:
      "Broad-form inland marine for your spray rigs, proportioners, compressors, generators, and specialty application equipment — covering theft, damage, and breakdown whether the equipment is at a job site, being transported, or stored at your yard.",
    icon: "Package",
    featured: false,
    keywords: ["inland marine spray contractor", "spray equipment floater", "contractor equipment insurance transit"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX·AZ·NM·OK", blurb: "The Southwest is one of the fastest-growing markets for spray foam insulation and polyurea coatings. We write spray contractor programs across Texas, Arizona, New Mexico, and Oklahoma — with proper class codes and carrier markets familiar with the region's commercial construction and retrofit volume." },
  { slug: "southeast", name: "Southeast", region: "FL·GA·NC·SC", blurb: "Florida and the Southeast have massive demand for spray foam insulation, polyurea waterproofing, and sealcoating. We place coverage for spray contractors across FL, GA, NC, and SC — including coastal contractors with higher exposure to humidity, hurricane prep, and large commercial projects." },
  { slug: "midwest", name: "Midwest", region: "IL·OH·MI·IN", blurb: "Midwest spray contractors face significant demand for spray foam insulation in cold-climate construction, polyurea flooring, and line striping for commercial lots. We write programs for IL, OH, MI, and IN applicators with proper WC class codes and GL covering completed operations." },
  { slug: "northeast", name: "Northeast", region: "NY·PA·NJ·CT", blurb: "The Northeast has dense commercial construction activity driving demand for spray foam, EIFS, and polyurea applications. Coverage programs for New York, Pennsylvania, New Jersey, and Connecticut spray contractors — with markets that understand complex multi-trade and high-rise exposures." },
  { slug: "california", name: "California", region: "CA", blurb: "California spray contractors face strict regulatory requirements around VOC emissions, worker safety, and pollution liability. We write specialized CPL and GL programs for California spray foam, sealcoating, and coating contractors compliant with state requirements." },
  { slug: "mountain-states", name: "Mountain States", region: "CO·UT·WY", blurb: "Growing construction markets in Colorado, Utah, and Wyoming are driving demand for spray foam insulation and polyurea coatings. We place programs for mountain-state spray contractors working on residential, commercial, and industrial projects across the region." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA·MD·DC", blurb: "The Mid-Atlantic region's heavy commercial and government construction activity creates strong demand for spray coatings, foam, and EIFS. Coverage for Virginia, Maryland, and DC spray contractors with markets familiar with government project requirements and multi-trade operations." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA·OR", blurb: "Washington and Oregon spray contractors face unique challenges — moisture-rich environments driving spray foam and waterproofing demand, strict environmental regulations, and large commercial projects. We write GL, CPL, and WC programs sized for the PNW market." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray-trade specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Spray contractors insured nationwide", prefix: "" },
  { value: 7, suffix: "", label: "Spray trades covered", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We do spray foam insulation on commercial buildings and had two carriers decline us over overspray exclusions. Spray Insurance found an A-rated market that understood our operation and covered completed operations correctly. First real quote we'd gotten in years.", name: "Marcus T.", role: "Owner", location: "Texas" },
  { quote: "Our polyurea crew had a job where overspray drifted onto a customer's vehicles. We thought we were covered — our old policy excluded it as a pollution event. Spray Insurance set us up with CPL that actually pays for these situations.", name: "Dana R.", role: "Operations Manager", location: "Florida" },
  { quote: "Sealcoating and line striping sounds simple but try finding a carrier that understands coal tar liability and gets our WC class codes right. These folks knew exactly what we needed and placed it fast.", name: "Kevin S.", role: "Co-owner", location: "Illinois" },
] as const;
