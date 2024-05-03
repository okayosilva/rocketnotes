import { Tag } from '../../components/tags'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { Container, Content, Links, Wrapper } from './styles'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface NoteInterface {
  id: string
  title: string
  description: string
  links: {
    id: string
    url: string
  }[]
  tags: {
    id: string
    name: string
  }[]
}

export function Details() {
  const navigation = useNavigate()
  const params = useParams()
  const [note, setNote] = useState<NoteInterface>()

  function handleBack() {
    navigation(-1)
  }

  async function handleRemove() {
    const confirmation = window.confirm('Deseja realmente excluir esta nota?')

    if (confirmation) {
      await api.delete(`/notes/${params.id}`).then(() => {
        alert('Nota excluída com sucesso!')
        return handleBack()
      })
    }
  }

  useEffect(() => {
    async function loadNote() {
      await api.get(`/notes/${params.id}`).then((response) => {
        setNote(response.data)
      })
    }

    loadNote()
  }, [])
  return (
    <Container>
      <Header />
      {note && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <div className="">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
            <div className="">
              {note.links.length > 0 && (
                <Section title="Links Úteis">
                  <Links>
                    {note.links.map((link) => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}
              {note.tags.length > 0 && (
                <Section title="Marcadores">
                  <Wrapper>
                    {note.tags.map((tag) => (
                      <Tag key={String(tag.id)} title={tag.name} />
                    ))}
                  </Wrapper>
                </Section>
              )}
            </div>

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
