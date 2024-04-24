import React from 'react'
import ReactDOM from 'react-dom/client'

import { MyContext } from './myContext.ts'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.tsx'

import Global from './styles/global.ts'
import { Routes } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyContext.Provider
        value={{ email: 'kayo@16silva.com', password: 'Teste' }}
      >
        <Routes />
      </MyContext.Provider>
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
