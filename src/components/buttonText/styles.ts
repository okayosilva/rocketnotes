import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: 1rem;
  padding: 0.4rem;
  border-radius: 0.25rem;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['BG-700']};
  }
`
