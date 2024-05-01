import {
  type LucideIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  CoffeeIcon,
} from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://tiesen.id.vn' : 'http://localhost:3000'

export const description =
  "I'm a weeb developer who loves to build things. I enjoy working with TypeScript, Next.js, and ElysiaJS. I'm also a fan of anime, manga, and light novels."

interface SiteConfig {
  meta: Metadata
  viewport: Viewport
  email: string
  socials: { label: string; href: string; icon: LucideIcon }[]
  navLinks: { label: string; url: string }[]
}

export const siteConfig: SiteConfig = {
  meta: {
    metadataBase: new URL(baseUrl),
    title: { default: 'l2md3v', template: '%s | l2md3v' },
    description,
    authors: { name: 'l2md3v', url: baseUrl },
    creator: '@l2md3v',
    keywords: ['l2md3v', 'lamdev', 'l2md3v', 'LÂm Dev', 'Lam Dev', 'portfolio', 'blog'],
    openGraph: {
      type: 'profile',
      locale: 'vi_VN',
      url: baseUrl,
      siteName: 'l2md3v',
      /* images: `/og?title=Welcome to my portfolio&desc=${description}`, */
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@l2md3v',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: { canonical: baseUrl },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
      { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  email: 'l2md3v@gmail.com',

  socials: [
    {
      label: 'Github',
      href: 'https://github.com/l2md3v',
      icon: GithubIcon,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/l2md3v/',
      icon: LinkedinIcon,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/l2md3v/',
      icon: FacebookIcon,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/l2md3v',
      icon: TwitterIcon,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@l2md3v',
      icon: YoutubeIcon,
    },
    {
      label: 'Support me',
      href: 'https://me.momo.vn/l2md3v',
      icon: CoffeeIcon,
    },
  ],

  navLinks: [
    {
      label: 'Home',
      url: '/#home',
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
