import { ArrowLeft, User, Mail, Lock } from 'lucide-react'
import { Container, Form } from './styles'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="">
          <ArrowLeft />
        </a>
      </header>

      <Form>
        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Mail} />
        <Input placeholder="Senha Atual" type="password" icon={Lock} />
        <Input placeholder="Nova Senha" type="password" icon={Lock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
