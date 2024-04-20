import styled from 'styled-components'

export type ContainerProps = {
  isNew?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS['BG-800']};

  color: ${({ theme }) => theme.COLORS['GRAY-200']};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS['GRAY-200']}` : 'none'};

  margin-bottom: 0.5rem;

  border-radius: 0.75rem;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 0.3rem;

    padding: 0.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS['GRAY-100']};
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  > input {
    height: 3.5ren;
    width: 100%;

    padding: 0.75rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS['GRAY-100']};
    }
  }
`
