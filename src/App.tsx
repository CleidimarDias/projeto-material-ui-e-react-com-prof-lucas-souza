
import { BrowserRouter } from 'react-router-dom'
import { AppRouts } from './routs'
import { AppThemeProvider, DrawerProvider } from './contexts';
import { MenuLateral } from './components/menu-lateral';





function App() {

  return (
    <AppThemeProvider>
      <DrawerProvider>
        < BrowserRouter>
          <MenuLateral>
            <AppRouts />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>





  )
}

export default App
