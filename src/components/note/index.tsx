import { ComponentProps } from 'react'
import { Tag } from '../tags'
import { Container } from './styles'

type NoteData = {
  id: string
  name: string
}

export type NoteProps = ComponentProps<'button'> & {
  title: string
  tags?: NoteData[]
}

export function Note({ title, tags, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
      <span>{title}</span>

      {tags && (
        <footer>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
