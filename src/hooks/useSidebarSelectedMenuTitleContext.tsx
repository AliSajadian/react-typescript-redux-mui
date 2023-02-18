import {useContext} from 'react'
import { SidebarSelectedMenuTitleContext } from '../context/sidebarSelectedMenuTitleContext'

export const useSidebarSelectedMenuTitleContext = () => {
  return useContext(SidebarSelectedMenuTitleContext)
}