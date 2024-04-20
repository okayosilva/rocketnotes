import { ContainerHeader, Profile, ToggleThemeButton } from './styles'
import { Link } from 'react-router-dom'
import { Power } from 'lucide-react'

export function Header() {
  return (
    <ContainerHeader>
      <Profile>
        <Link to="/profile">
          <img src="https://github.com/okayosilva.png" alt="Foto do usuário" />
        </Link>
        <div>
          <span>Bem vindo,</span>
          <strong>Kayo Silva</strong>
        </div>
      </Profile>
      <ToggleThemeButton type="button">
        <Power size={24} />
      </ToggleThemeButton>
    </ContainerHeader>
  )
}
