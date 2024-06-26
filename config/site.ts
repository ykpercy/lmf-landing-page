import { SiteConfig } from "@/types/siteConfig";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://github.com/ykpercy/lmf-landing-page/'

const baseSiteConfig = {
  name: "Limifin Landing Page",
  description:
    "Landing page for limifin.com, Read financial reports, Pick up stocks.",
  url: "https://limifin.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["financial reports", "stock screener", "stock", "portfolio", "financial data"],
  authors: [
    {
      name: "limifin.com",
      url: "https://limifin.com",
      twitter: 'https://x.com/yang_percy68670',
    }
  ],
  creator: '@ykpercy',
  openSourceURL: 'https://github.com/ykpercy/lmf-landing-page',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
  ],
  footerLinks: [
    { name: 'email', href: "mailto:ykpercy@qq.com", icon: MdEmail },
    { name: 'github', href: "https://github.com/ykpercy/", icon: BsGithub },
  ],
  footerProducts: [
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
