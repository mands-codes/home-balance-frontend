import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(250, 250, 248, 0.9);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Inner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heart};
  letter-spacing: -0.02em;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.inkSoft};
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`

const PublishLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.heart};
  color: white;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
`

const UserName = styled.span`
  color: ${({ theme }) => theme.colors.inkSoft};
`

const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.inkFaint};
  font-size: 0.875rem;
  transition: color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <Header>
      <Inner>
        <Logo to="/">Home Balance</Logo>

        <Nav>
          {user ? (
            <>
              <PublishLink to="/upload">Publicar</PublishLink>
              <UserName>{user.displayName}</UserName>
              <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </>
          ) : (
            <>
              <NavLink to="/login">Entrar</NavLink>
              <PublishLink to="/register">Criar conta</PublishLink>
            </>
          )}
        </Nav>
      </Inner>
    </Header>
  )
}
