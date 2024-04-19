import { Container } from './styles'

export type TagProps = {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  )
}
