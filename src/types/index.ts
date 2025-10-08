export interface Sector {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
}

export interface Country {
  id: string;
  name: string;
  description: string;
  flag: string;
  image: string;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}