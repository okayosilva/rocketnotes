import { Container, Form } from './styles'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { NewItem } from '../../components/newItem'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título" type="text" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NewItem value="New Link" isNew />
            <NewItem value="New Link" />
          </Section>
        </Form>
      </main>
    </Container>
  )
}
