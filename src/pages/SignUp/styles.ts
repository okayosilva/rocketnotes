import styled from 'styled-components'
import backgroundImg from '../../assets/dark-notes.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  margin: 0 auto;

  justify-content: center;
  text-align: center;
  padding: 4rem;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  > h2 {
    font-size: 1.5;
    margin: 1rem 0 1rem 0;
    color: ${({ theme }) => theme.COLORS['GRAY-300']};
  }

  > p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.COLORS['GRAY-200']};
  }

  > a {
    color: ${({ theme }) => theme.COLORS['GRAY-200']};

    &:hover {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
