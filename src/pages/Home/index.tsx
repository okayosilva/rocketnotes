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

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Tag {
  id: string
  name: string
}

interface Note {
  id: number
  title: string
  tags: Tag[]
}

export function Home() {
  const navigate = useNavigate()

  const [search, setSearch] = useState<string>('')
  const [tags, setTags] = useState<Tag[]>([])
  const [tagsSelected, setTagsSelected] = useState<string[]>([])

  const [notes, setNotes] = useState<Note[]>([])

  function handleTagSelected(tagName: string) {
    const alteredSelectedTags = tagsSelected.includes(tagName)

    if (alteredSelectedTags) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      return setTagsSelected(filteredTags)
    }

    setTagsSelected((prevState) => [...prevState, tagName])
  }

  function handleDetails(id: number) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function loadTags() {
      api.get('/tags').then((response) => {
        setTags(response.data)
      })
    }

    loadTags()
  }, [])

  useEffect(() => {
    async function loadNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`,
      )

      setNotes(response.data)
    }
    loadNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            $isActive={tagsSelected.length === 0 ? 'true' : 'false'}
            onClick={() => setTagsSelected([])}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <ButtonText
              key={tag.id}
              title={tag.name}
              onClick={() => handleTagSelected(tag.name)}
              $isActive={tagsSelected.includes(tag.name) ? 'true' : 'false'}
            />
          ))}
      </Menu>

      <SearchContent>
        <Input
          placeholder="Pesquisar pelo título"
          icon={Search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContent>
      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              tags={note.tags}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>
      <NewNote to="/New">
        <Plus size={18} />
        <span>Criar nova nota</span>
      </NewNote>
    </Container>
  )
}
