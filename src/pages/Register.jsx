import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  FormPage, Title, Form, Input, PrimaryButton, ErrorText, FooterText, FooterLink,
} from '../components/FormElements'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await register(email, password, displayName)
      navigate('/')
    } catch (err) {
      const msg = err.response?.data
      setError(Array.isArray(msg) ? msg.join(' ') : (msg || 'Não foi possível criar a conta.'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormPage>
      <Title>Criar conta</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome de exibição"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha (mín. 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <PrimaryButton type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar conta'}
        </PrimaryButton>
      </Form>

      <FooterText>
        Já tem conta? <FooterLink as={Link} to="/login">Entrar</FooterLink>
      </FooterText>
    </FormPage>
  )
}
