export interface NavigationLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export const navigation: NavigationLink[] = [
  { label: 'Home', path: '' },
  { label: 'About Us', path: '#about' },
  { label: 'Our Services', path: '#services' },
  { label: 'Our Team', path: '#team', children: [
    { label: 'Management Team', path: '#management' },
    { label: 'Teaching Team', path: '#teaching' },
    { label: 'Gaushala Care Team', path: '#gaushala-care' },
    { label: 'Elder Care Team', path: '#elder-care' },
    { label: 'Community Supporters', path: '#community-supporters' },
  ] },
  { label: 'Events', path: 'events/' },
  { label: 'Stories', path: 'stories/' },
  { label: 'Gallery', path: 'gallery/' },
  { label: 'Contact', path: 'contact/' },
];
