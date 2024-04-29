import { useAuth, UserInterface } from '../../hooks/auth'
import { api } from '../../services/api'

import { ArrowLeft, User, Mail, Lock, Camera } from 'lucide-react'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
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

  const avatarUrl = `${api.defaults.baseURL}/files/${user!.avatar}`
  const avatarValid = user?.avatar ? user?.avatar : avatarPlaceholder

  const [avatar, setAvatar] = useState(user?.avatar ? avatarUrl : avatarValid)
  const [avatarFile, setAvatarFile] = useState<File>()

  async function handleUpdate() {
    const user: UserInterface = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    }

    updateProfile(user, avatarFile!)
  }

  function handleChangeAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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
          <img src={avatar} alt={user?.name} />
          <label htmlFor="avatar">
            <Camera size={20} />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
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
