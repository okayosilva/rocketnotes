/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { api } from '../services/api'

export interface UserInterface {
  id?: string
  name: string
  email: string
  avatar?: string
  password?: string
  old_password?: string
}
export interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: UserInterface | null
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  updateProfile(userData: UserInterface, avatarFile: File): void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserInterface | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useState<string | null>(null)

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketnotes:token', token)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

      api.defaults.headers.common.Authorization = `Bearer ${token}`

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

  function signOut() {
    localStorage.removeItem('@rocketnotes:token')
    localStorage.removeItem('@rocketnotes:user')
    setUser(null)
  }

  async function updateProfile(userData: UserInterface, avatarFile: File) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        userData.avatar = response.data.avatar
      }

      await api.put('/users', userData)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(userData))

      setUser(userData)
      alert('Perfil atualizado com sucesso!')
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
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(JSON.parse(user))
      setToken(token)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateProfile }}>
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
