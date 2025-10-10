import { Sector, Country, Service, NavItem } from '@/types';

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Sectors',
    href: '/sectors',
    children: [
      { label: 'Health', href: '/sectors/health' },
      { label: 'Education', href: '/sectors/education' },
      { label: 'Agriculture', href: '/sectors/agriculture' },
      { label: 'Development', href: '/sectors/development' },
    ],
  },
  {
    label: 'Countries',
    href: '/countries',
    children: [
      { label: 'Zambia', href: '/countries/zambia' },
      { label: 'Kenya', href: '/countries/kenya' },
      { label: 'Rwanda', href: '/countries/rwanda' },
      { label: 'Zimbabwe', href: '/countries/zimbabwe' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const SECTORS: Sector[] = [
  {
    id: 'health',
    title: 'Health',
    description: 'Comprehensive health research and data collection services across Africa',
    icon: 'heart-pulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    link: '/sectors/health',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Educational research and insights to improve learning outcomes',
    icon: 'graduation-cap',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    link: '/sectors/education',
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    description: 'Agricultural research supporting sustainable farming practices',
    icon: 'sprout',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    link: '/sectors/agriculture',
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Development research driving sustainable impact and growth',
    icon: 'trending-up',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    link: '/sectors/development',
  },
];

export const COUNTRIES: Country[] = [
  {
    id: 'zambia',
    name: 'Zambia',
    description: 'Our headquarters and primary research hub in Southern Africa',
    flag: '🇿🇲',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    link: '/countries/zambia',
  },
  {
    id: 'kenya',
    name: 'Kenya',
    description: 'East African research operations and data collection services',
    flag: '🇰🇪',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    link: '/countries/kenya',
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    description: 'Research excellence in the heart of East Africa',
    flag: '🇷🇼',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800',
    link: '/countries/rwanda',
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    description: 'Southern African research and consulting services',
    flag: '🇿🇼',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    link: '/countries/zimbabwe',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'research',
    title: 'Research & Consulting',
    description: 'Evidence-based research and strategic consulting services',
    icon: 'search',
  },
  {
    id: 'data-collection',
    title: 'Data Collection',
    description: 'Comprehensive data collection across multiple sectors',
    icon: 'database',
  },
  {
    id: 'analysis',
    title: 'Data Analysis',
    description: 'Advanced analytics and insights generation',
    icon: 'bar-chart',
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Evaluation',
    description: 'Impact assessment and program evaluation services',
    icon: 'activity',
  },
];

export const COMPANY_INFO = {
  name: 'RECS Research',
  tagline: 'Data, Research & Insights for Sustainable Impact',
  email: 'info@RECSr.com',
  careers: 'careers@RECSr.com',
  phone: '+260 XXX XXX XXX',
  address: '69 Chitimukulu Road, PHI, Lusaka, Zambia',
};