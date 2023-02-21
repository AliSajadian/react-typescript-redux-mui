import {useContext} from 'react'
import { TemplateDirectionContext } from '../context'

export const useTemplateDirectionContext = () => {
  return useContext(TemplateDirectionContext)
}