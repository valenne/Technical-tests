import { useState } from 'react'
import { Video_Games_props } from '../types/general.types'

type useItemsReturn = [Video_Games_props[], (event: React.FormEvent<HTMLFormElement>) => void]

export const useItems = (): useItemsReturn => {
  const [items, setItems] = useState<Video_Games_props[]>([])

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // captured the trigger element of the event submit form
    const elements = event.currentTarget.elements

    // take all the elements by the property name
    const itemName = elements.namedItem('item_name')
    const itemDate = elements.namedItem('item_date')
    const itemUrl = elements.namedItem('item_url')
    const item_description = elements.namedItem('item_description')

    // "TYPESCRIPT" = testing if the elements are a instance of the html input element
    const isInputs =
      itemName instanceof HTMLInputElement &&
      itemDate instanceof HTMLInputElement &&
      itemUrl instanceof HTMLInputElement &&
      item_description instanceof HTMLInputElement

    // "TYPESCRIPT" = evaluate if the elements satisfy the desire argument
    if (!isInputs || isInputs === null) return

    if (
      itemName.value === '' ||
      itemDate.value === '' ||
      itemUrl.value === '' ||
      item_description.value === ''
    ) {
      return
    }

    // create the new item with the requiere values
    const newItem: Video_Games_props = {
      id: crypto.randomUUID(),
      name: itemName.value,
      date: itemDate.value,
      url: itemUrl.value,
      descripcion: item_description.value
    }

    // save the values on the variable
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    itemName.value = ''
    itemDate.value = ''
    itemUrl.value = ''
    item_description.value = ''
  }

  return [items, handleSubmitForm]
}
