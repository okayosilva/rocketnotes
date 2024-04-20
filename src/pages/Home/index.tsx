import {
  Container,
  Brand,
  Menu,
  SearchContent,
  Content,
  NewNote,
} from './styles'

import { Plus, Search } from 'lucide-react'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'

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

      <SearchContent>
        <Input placeholder="Pesquisar pelo título" icon={Search} />
      </SearchContent>
      <Content></Content>
      <NewNote>
        <Plus size={18} />
        <span>Criar nova nota</span>
      </NewNote>
    </Container>
  )
}
