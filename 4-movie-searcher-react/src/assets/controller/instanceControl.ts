interface ControlProps {
  element: EventTarget & (HTMLFormElement | HTMLInputElement)
  namedElement?: string
}

export const typeControl = ({ element, namedElement }: ControlProps) => {
  let typeOfControl = null

  if (element instanceof HTMLInputElement) {
    typeOfControl = element
    return typeOfControl
  }

  if (element instanceof HTMLFormElement && namedElement) {
    typeOfControl = element.elements.namedItem(namedElement)
    return typeOfControl
  }

  return typeOfControl
}
