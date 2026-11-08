import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  FormPage, Title, Form, Input, PrimaryButton, ErrorText, FooterText, FooterLink,
} from '../components/FormElements'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch {
      setError('E-mail ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormPage>
      <Title>Entrar</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <ErrorText>{error}</ErrorText>}

        <PrimaryButton type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </PrimaryButton>
      </Form>

      <FooterText>
        Não tem conta? <FooterLink as={Link} to="/register">Crie uma</FooterLink>
      </FooterText>
    </FormPage>
  )
}
