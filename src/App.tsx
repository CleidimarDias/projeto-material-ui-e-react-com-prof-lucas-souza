
import { BrowserRouter } from 'react-router-dom'
import { AppRouts } from './routs'
import { AppThemeProvider } from './contexts';
import { MenuLateral } from './components/menu-lateral';





function App() {

  return (
    <AppThemeProvider>
      < BrowserRouter>
        <MenuLateral>
          <AppRouts />
        </MenuLateral>

      </BrowserRouter>
    </AppThemeProvider>





  )
}

export default App
