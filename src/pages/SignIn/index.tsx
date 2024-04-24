import { Button } from '../../components/button'
import { Input } from '../../components/input'

import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'

import { useAuth, SignInCredentials } from '../../hooks/authContext'
import { Mail, Lock } from 'lucide-react'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  function handleSignIn({ email, password }: SignInCredentials) {
    signIn({ email, password })
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>faça seu login</h2>

        <Input
          type="text"
          placeholder="E-mail"
          icon={Mail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="E-mail"
          icon={Lock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={() => handleSignIn({ email, password })}
        />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}
