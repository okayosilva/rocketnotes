import styled from 'styled-components'

export const ContainerHeader = styled.header`
  grid-area: header;

  width: 100%;
  min-height: 6.5rem;
  padding: 1rem 4rem;
  position: sticky;
  flex-wrap: wrap;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS['BG-900']};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS['GRAY-200']};
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 4rem;
    height: 4rem;

    border-radius: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.COLORS['GRAY-200']};
    }

    > strong {
      font-size: 1.25rem;
    }
  }
`

export const ToggleThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transition: all 0.1s;

  > svg {
    color: ${({ theme }) => theme.COLORS['GRAY-200']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS['GRAY-100']};

    > svg {
      color: ${({ theme }) => theme.COLORS.GREEN};
    }
  }
`
