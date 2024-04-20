import { ComponentProps } from 'react'
import { Container } from './styles'

type TextAreaProps = ComponentProps<'textarea'>

export function TextArea({ ...rest }: TextAreaProps) {
  return <Container {...rest}></Container>
}
