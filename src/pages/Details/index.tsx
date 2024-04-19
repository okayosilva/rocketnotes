import { Tag } from '../../components/Tag'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { Header } from '../../components/header'
import { Section } from '../../components/section'
import { Container, Content, Links, Wrapper } from './styles'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <div className="">
            <h1>Introdução ao React</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="">
            <Section title="Links Úteis">
              <Links>
                <li>
                  <a href="#">https://rocketseat.com.br</a>
                </li>
                <li>
                  <a href="#">https://rocketseat.com.br</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Wrapper>
                <Tag title="aqui" />
                <Tag title="aqui" />
              </Wrapper>
            </Section>
          </div>

          <Button title="Editar nota" />
        </Content>
      </main>
    </Container>
  )
}
