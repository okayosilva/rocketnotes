import { Button } from '../../components/button'
import { Input } from '../../components/input'

import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'

import { useAuth } from '../../hooks/authContext'
import { Mail, Lock } from 'lucide-react'

export function SignIn() {
  const data = useAuth()
  console.log(data)
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={Mail} />
        <Input type="password" placeholder="E-mail" icon={Lock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}
