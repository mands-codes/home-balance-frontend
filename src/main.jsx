import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { theme } from './styles/theme.js'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient.js'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AuthProvider>

      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
