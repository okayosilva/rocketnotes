import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    overflow-y: scroll;
  }
`
export const Links = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: all 0.1s;

      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.COLORS.GREEN};
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 34.375rem;
  margin: 0 auto;

  padding: 6rem 1.5rem 2.5rem 1.5rem;
  gap: 1.5rem;

  > button:first-child {
    align-self: end;
  }

  > div {
    > h1 {
      font-size: 2.25rem;
    }

    > p {
      margin-top: 1.5rem;
      font-size: 1rem;
      line-height: 1.5;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS['GRAY-300']};
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  padding-top: 1.5rem;
  gap: 0.5rem;
`
