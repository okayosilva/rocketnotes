import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;

  border-radius: 0.5rem;
  border: 0;

  resize: none;
  outline: none;

  background-color: ${({ theme }) => theme.COLORS['BG-800']};
  color: ${({ theme }) => theme.COLORS.WHITE};

  overflow: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;

  &::placeholder {
    border-color: ${({ theme }) => theme.COLORS['GRAY-100']};
  }
`
