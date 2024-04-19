import { Plus } from 'lucide-react'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" $isActive="true" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search></Search>
      <Content></Content>
      <NewNote>
        <Plus size={18} />
        <span>Criar nova nota</span>
      </NewNote>
    </Container>
  )
}
