import styled from 'styled-components'

export const Container = styled.span`
  font-size: 0.8rem;
  font-weight: 700;

  border-radius: 2rem;
  padding: 0.25rem 0.75rem;

  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS['BG-800']};
  margin-right: 0.5rem;
`
