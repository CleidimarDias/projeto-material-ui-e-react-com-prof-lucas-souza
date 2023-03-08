
import { BrowserRouter } from 'react-router-dom'
import { AppRouts } from './routs'
import { AppThemeProvider } from './contexts';





function App() {

  return (
    <AppThemeProvider>
      < BrowserRouter>
          <AppRouts />
        </BrowserRouter>
    </AppThemeProvider>
      
        
      
    

  )
}

export default App
