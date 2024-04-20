import { ComponentProps } from 'react'
import { Container, ContainerProps } from './styles'
import { Plus, X } from 'lucide-react'

type NewItemProps = ComponentProps<'input'> &
  ContainerProps & {
    value: string
  }

export function NewItem({ value, isNew = false, ...rest }: NewItemProps) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={() => console.log('Aqui')}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <Plus size={18} /> : <X size={18} />}
      </button>
    </Container>
  )
}
