import { typeControl } from '../controller/instanceControl'

export const useHandleEvents = (
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>
) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const value = event.currentTarget
    const controlSubmit = typeControl({ element: value, namedElement: 'query-input' })

    const isInput = controlSubmit instanceof HTMLInputElement
    if (!isInput || controlSubmit === null) return

    console.log(query)
    controlSubmit.value = ''
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget
    const controlChange = typeControl({ element: value })

    const isInput = controlChange instanceof HTMLInputElement
    if (!isInput || controlChange === null) return

    // evitando el problema de utilizar el estado anterior
    const newQuery = controlChange.value
    setQuery(newQuery)
  }

  return { handleSubmit, handleChange }
}
