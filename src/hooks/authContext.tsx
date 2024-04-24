import { createContext, useContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

interface User {
  id: string
  name: string
  email: string
  // Adicione outros campos, se necessário
}
export interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User | null
  signIn(credentials: SignInCredentials): Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setUser(user)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Erro ao fazer login, tente novamente mais tarde.')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
