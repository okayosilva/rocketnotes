import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS['BG-800']};

  height: 3.5rem;
  border: 0;
  padding: 0 1rem;

  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  transition: all 0.1s ease-in-out;
  &:hover {
    filter: brightness(1.1);
  }
`
