import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: 1rem;
`
