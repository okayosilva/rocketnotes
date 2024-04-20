import { Button } from '../../components/button'
import { Input } from '../../components/input'

import { Container, Form, Background } from './styles'

import { Mail, Lock } from 'lucide-react'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={Mail} />
        <Input type="password" placeholder="E-mail" icon={Lock} />

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}
