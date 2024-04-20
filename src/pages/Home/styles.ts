import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 6.5rem 8rem auto 4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newNote content';

  background-color: ${({ theme }) => theme.COLORS['BG-900']};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS['GRAY-200']};
  background-color: ${({ theme }) => theme.COLORS.GREEN};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS['BG-700']};
  }
`
export const Menu = styled.ul`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding-top: 4rem 4rem 0;

  background-color: ${({ theme }) => theme.COLORS['BG-800']};
`
export const SearchContent = styled.div`
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4rem;
`
export const Content = styled.div``
export const NewNote = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.GREEN};
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  > span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS['BG-900']};
  }
`
