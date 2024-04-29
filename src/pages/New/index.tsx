import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { NewItem } from '../../components/newItem'
import { Button } from '../../components/button'

export function New() {
  const [newLink, setNewLink] = useState('')
  const [links, setLinks] = useState<string[]>([])

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(linkDeleted: string) {
    setLinks((prevState) => prevState.filter((link) => link !== linkDeleted))
  }
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
              {links.map((link, index) => {
                return (
                  <NewItem
                    key={index}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                )
              })}

              <NewItem
                value={newLink}
                isNew
                onChange={(e) => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />
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
