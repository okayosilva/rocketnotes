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
import { Note } from '../../components/note'
import { Section } from '../../components/section'

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
      <Content>
        <Section title="Minhas notas">
          <Note
            title="React"
            tags={[
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' },
            ]}
          />
        </Section>
      </Content>
      <NewNote to="/New">
        <Plus size={18} />
        <span>Criar nova nota</span>
      </NewNote>
    </Container>
  )
}
