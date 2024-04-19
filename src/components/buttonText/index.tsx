import { ComponentProps } from 'react'
import { Container } from './styles'

type ButtonProps = ComponentProps<'button'> & {
  title: string
}

export function ButtonText({ title, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      <span>{title}</span>
    </Container>
  )
}
