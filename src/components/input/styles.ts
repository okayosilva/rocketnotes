import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS['BG-800']};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;

  > input {
    height: 2rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS['GRAY-200']};
    }
  }
`
