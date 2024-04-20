import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.5rem 4.5rem;
    max-height: 9;

    background-color: ${({ theme }) => theme.COLORS['GRAY-100']};

    > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.COLORS['GRAY-300']};

      transition: all 0.1s;

      &:hover {
        color: ${({ theme }) => theme.COLORS.GREEN};
      }
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  max-width: 21.25rem;
  margin: 1.875rem auto 0;
`
