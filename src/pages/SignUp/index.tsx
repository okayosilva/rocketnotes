import { api } from '../../services/api.ts'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Mail, User, Lock } from 'lucide-react'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao cadastrar usuário, tente novamente mais tarde.')
        }
      })

    setEmail('')
    setName('')
    setPassword('')
    navigate('/')
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
          icon={User}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
          icon={Mail}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
          icon={Lock}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
