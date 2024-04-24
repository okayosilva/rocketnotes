import { createContext, useContext, ReactNode } from 'react'

export const AuthContext = createContext({})

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ email: 'Kayo@mail.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
