import { ContainerHeader, Profile, ToggleThemeButton } from './styles'
import { Link } from 'react-router-dom'
import { Power } from 'lucide-react'

import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user?.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const name = user?.name
  return (
    <ContainerHeader>
      <Profile>
        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
        <div>
          <span>Bem vindo,</span>
          <strong>{name}</strong>
        </div>
      </Profile>
      <ToggleThemeButton type="button" onClick={() => signOut()}>
        <Power size={24} />
      </ToggleThemeButton>
    </ContainerHeader>
  )
}
