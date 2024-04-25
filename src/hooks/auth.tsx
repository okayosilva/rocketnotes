/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useState<string | null>(null)

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data
      console.log(response.data)

      localStorage.setItem('@rocketnotes:token', token)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

      api.defaults.headers.authorization = `Bearer ${token}`
      setUser(user)
      setToken(token)
    } catch (error) {
      if ((error as any).response) {
        alert((error as any).response.data.message)
      } else {
        alert('Erro ao fazer login, tente novamente mais tarde.')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = localStorage.getItem('@rocketnotes:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setUser(JSON.parse(user))
      setToken(token)
    }
  }, [])

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
