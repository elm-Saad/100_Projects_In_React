import { ReactNode } from "react"

/**
 * {
    {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  }
 */


export interface linksType {
    id: number
    url: string
    text: string
    icon: ReactNode
}

export interface socialType {
    id: number
    url: string
    icon: ReactNode

}

export type GlobalContextType = {
    Navbar: boolean
    openNav: () => void
    closeNav: () => void
    Modal: boolean
    openModal: () => void
    closeModal: () => void
}
