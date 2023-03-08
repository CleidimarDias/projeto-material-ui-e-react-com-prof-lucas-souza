import { Button } from '@mui/material'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useAppThemeContext } from '../contexts'

export const AppRouts = () => {
  const {toggleTheme} = useAppThemeContext()
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme}>TOGGLE THEME</Button>} />  
      <Route path="*" element={< Navigate to="/pagina-inicial"/>}/>
    </Routes>
  )
}