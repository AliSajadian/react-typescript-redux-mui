import {useContext} from 'react'
import { TemplateThemeModeContext } from '../context'

export const useTemplateThemeModeContext = () => {
  return useContext(TemplateThemeModeContext)
}