import styled from 'styled-components'

export const Container = styled.div`
  margin: 1.5rem 0 1rem;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS['BG-700']};
    padding-bottom: 1rem;

    color: ${({ theme }) => theme.COLORS['GRAY-200']};
    font-size: 20px;
    font-weight: 400;
  }
`
