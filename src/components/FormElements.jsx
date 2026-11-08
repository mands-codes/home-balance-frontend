import styled from 'styled-components'

export const FormPage = styled.div`
  max-width: ${({ $wide }) => ($wide ? '28rem' : '24rem')};
  margin: 0 auto;
  padding: 4rem 1rem;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.15s ease;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.heart};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  outline: none;
  resize: none;
  transition: box-shadow 0.15s ease;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.heart};
  }
`

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  border-radius: 0.75rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.heart};
  color: white;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.heart};
  font-size: 0.875rem;
  margin: 0;
`

export const FooterText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 1.5rem;
`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.heart};
  font-weight: 500;
  cursor: pointer;
`
