import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Form } from './styles'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { NewItem } from '../../components/newItem'
import { Button } from '../../components/button'
import { api } from '../../services/api'
import { ButtonText } from '../../components/buttonText'

export function New() {
  const navigation = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [newLink, setNewLink] = useState('')
  const [links, setLinks] = useState<string[]>([])

  const [newTag, setNewTag] = useState('')
  const [tags, setTags] = useState<string[]>([])

  function handleBack() {
    navigation(-1)
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(linkDeleted: string) {
    setLinks((prevState) => prevState.filter((link) => link !== linkDeleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted))
  }

  async function onSaveNewNote() {
    if (!title) {
      alert('Você precisa informar um título para a nota!')
      return
    }

    if (newLink) {
      alert('Parece que você esqueceu de adicionar o link!')
      return
    }

    if (newTag) {
      alert('Parece que você esqueceu de adicionar a tag!')
      return
    }

    if (!description && !links.length && !tags.length) {
      alert(
        'Você precisa informar pelo menos uma observação, link e tag para criar uma a nota!',
      )
      return
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })

    alert('Nota criada com sucesso!')
    navigation(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText onClick={handleBack} title="Voltar" />
          </header>

          <Input
            placeholder="Título"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

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
              {tags.map((tag, index) => {
                return (
                  <NewItem
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                )
              })}

              <NewItem
                value={newTag}
                isNew
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={onSaveNewNote} />
        </Form>
      </main>
    </Container>
  )
}
