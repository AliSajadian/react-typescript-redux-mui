import {useContext} from 'react'
import { ColorModeContext } from '../context'

export const useColorModeContext = () => {
  return useContext(ColorModeContext)
}