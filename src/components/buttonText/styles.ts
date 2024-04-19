import styled from 'styled-components'

export type ButtonStatusProps = {
  $isActive?: string
}

export const Container = styled.button<ButtonStatusProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme, $isActive }) =>
    $isActive === 'true' ? theme.COLORS.GREEN : theme.COLORS.WHITE};
  font-size: 1rem;
  padding: 0.4rem;
  border-radius: 0.25rem;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['BG-900']};
  }
`
