
import { ReactNode } from 'react';
type linksType = {
  id: string
  label: string
  icon: ReactNode
  url: string
}
export interface sublinksType {
  pageId: string
  page: string
  links: linksType[]
}

export interface ContextValueType {
    isNavOpen: boolean
    openNav: ()=> void
    closeNav: ()=> void
}