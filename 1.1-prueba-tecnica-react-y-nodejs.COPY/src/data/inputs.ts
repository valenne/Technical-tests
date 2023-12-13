export const inputsProps = [
  {
    id: 'item_name',
    label: 'Name',
    name: 'item_name',
    type: 'text',
    placeholder: 'Last of Us',
    error: 'Error: Escribe un nombre que tenga entre 3 a 16 caracteres, sin especiales',
    pattern: '[a-zA-Z0-9\\s\\W]{3,16}$',
    required: true
  },
  {
    id: 'item_date',
    label: 'Date',
    name: 'item_date',
    type: 'date',
    error: 'Error: Espacio en blanco, necesito una fecha',
    required: true
  },
  {
    id: 'item_url',
    label: 'URL',
    name: 'item_url',
    type: 'text',
    placeholder: 'https://www.lastofus.com',
    pattern: '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}.[a-z]{2,4}\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?',
    error: 'Error: No cumple con los requisitos necesarios',
    required: true
  },
  {
    id: 'item_description',
    label: 'Description',
    name: 'item_description',
    type: 'text',
    placeholder: 'The Last of Us es una franquicia de juegos de acción...',
    pattern: '[a-zA-Z0-9\\s\\W]{3,100}$',
    error: 'Error: El texto debe tener entre 3 y 20 caracteres',
    required: true
  }
]
