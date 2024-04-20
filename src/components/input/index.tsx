import { ComponentProps, ElementType } from 'react'
import { Container } from './styles'

type InputProps = ComponentProps<'input'> & {
  icon: ElementType
}
export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={18} />}
      <input type="text" {...rest} />
    </Container>
  )
}
