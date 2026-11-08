import { createContext, useContext, useState } from 'react'
import { authApi } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  function persistSession(data) {
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', JSON.stringify({
      id: data.user.id,
      email: data.user.email,
      displayName: data.user.name,
    }))
    setUser({ id: data.user.id, email: data.user.email, displayName: data.user.name })
  }

  async function login(email, password) {
      const { data } = await authApi.post('/login', { email, password })
      console.log("data", data);
    persistSession(data)
  }

  async function register(email, password, displayName) {
    const { data } = await authApi.post('/register', { email, password, displayName })
    persistSession(data)
  }

  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
