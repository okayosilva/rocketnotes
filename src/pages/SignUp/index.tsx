import { Mail, User, Lock } from 'lucide-react'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={User} />
        <Input type="text" placeholder="E-mail" icon={Mail} />
        <Input type="password" placeholder="Senha" icon={Lock} />

        <Button title="Cadastrar" />

        <a href="#">Voltar para o login</a>
      </Form>
    </Container>
  )
}
