import { LinksType, SocialType } from './interfaces'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { nanoid } from 'nanoid'
export const links: LinksType[] = [
  {
    id: nanoid(),
    url: '/',
    text: 'home',
  },
  {
    id: nanoid(),
    url: '/about',
    text: 'about',
  },
  {
    id: nanoid(),
    url: '/projects',
    text: 'projects',
  },
  {
    id: nanoid(),
    url: '/contact',
    text: 'contact',
  },
  {
    id: nanoid(),
    url: '/profile',
    text: 'profile',
  },
]

export const social: SocialType[] = [
  {
    id: nanoid(),
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: nanoid(),
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: nanoid(),
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
]
