import { ComponentProps } from 'react'
import { ButtonStatusProps, Container } from './styles'

type ButtonProps = ComponentProps<'button'> &
  ButtonStatusProps & {
    title: string
  }

export function ButtonText({ title, $isActive, ...rest }: ButtonProps) {
  return (
    <Container type="button" $isActive={$isActive} {...rest}>
      <span>{title}</span>
    </Container>
  )
}
