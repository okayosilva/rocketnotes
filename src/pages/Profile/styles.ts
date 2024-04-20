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
  gap: 0.8rem;

  max-width: 21.25rem;
  margin: 1.875rem auto 0;

  > div:nth-child(4) {
    margin-top: 0.8rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -7.75rem auto 1.5rem;

  width: 11.625rem;
  height: 11.625rem;

  > img {
    width: 11.625rem;
    height: 11.625rem;
    border-radius: 50%;
  }

  label {
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
