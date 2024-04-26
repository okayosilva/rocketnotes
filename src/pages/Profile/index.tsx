import { useAuth, UserInterface } from '../../hooks/auth'

import { ArrowLeft, User, Mail, Lock, Camera } from 'lucide-react'
import { Avatar, Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  async function handleUpdate() {
    const user: UserInterface = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile(user)
  }

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
        <Input
          placeholder="Nome"
          type="text"
          icon={User}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={Lock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={Lock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
