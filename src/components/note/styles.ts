import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: none;

  background-color: ${({ theme }) => theme.COLORS['BG-800']};
  border-radius: 0.2rem;

  padding: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  > span {
    display: block;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
`
