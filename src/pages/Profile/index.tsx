import { ArrowLeft, User, Mail, Lock, Camera } from 'lucide-react'
import { Avatar, Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/okayosilva.png"
            alt="Imagem do usuário"
          />
          <label htmlFor="avatar">
            <Camera size={20} />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={User} />
        <Input placeholder="E-mail" type="text" icon={Mail} />
        <Input placeholder="Senha Atual" type="password" icon={Lock} />
        <Input placeholder="Nova Senha" type="password" icon={Lock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
