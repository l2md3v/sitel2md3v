import * as icons from 'lucide-react'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? '#' : 'http://localhost:3000'

const description =
  "Hi there, I'm Tiesen, a web developer from Vietnam. I seft-taught and love to build new things."

export const siteConfig = {
  metadata: {
    metadataBase: new URL(baseUrl),
    title: { default: 'Tiesen', template: '%s | Tiesen' },
    description,
    authors: { name: 'Tiesen', url: baseUrl },
    creator: '@tiesen243',
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    applicationName: 'Tiesen',
    openGraph: {
      type: 'profile',
      locale: 'vi_VN',
      url: baseUrl,
      siteName: 'Tiesen',
      images: `/og?title=Welcome to my portfolio&desc=${description}`,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tiesen243',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: { canonical: baseUrl },
  },
  email: 'ttien56906@gmail.com',

  socials: [
    {
      label: 'Github',
      href: 'https://github.com/l2md3v',
      icon: icons.GithubIcon,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/l2md3v/',
      icon: icons.LinkedinIcon,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/l2md3v/',
      icon: icons.FacebookIcon,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/l2md3v',
      icon: icons.TwitterIcon,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@l2md3v',
      icon: icons.YoutubeIcon,
    },
    {
      label: 'Support me',
      href: 'https://me.momo.vn/l2md3v',
      icon: icons.CoffeeIcon,
    },
  ],

  navLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/#about',
    },

    {
      label: 'Contact',
      url: '/#contact',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ],
}
