import { Container, Form } from './styles'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { NewItem } from '../../components/newItem'
import { Button } from '../../components/button'

import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" type="text" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <div className="wrapper">
              <NewItem value="New Link" isNew />
              <NewItem value="New Link" />
            </div>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NewItem value="React" isNew />
              <NewItem value="Nova Tag" />
              <NewItem value="Nova Tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
