import {useContext} from 'react'
import { SidebarSelectedMenuTitleContext } from '../context'

export const useSidebarSelectedMenuTitleContext = () => {
  return useContext(SidebarSelectedMenuTitleContext)
}