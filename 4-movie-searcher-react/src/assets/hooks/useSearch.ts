import { useEffect, useRef, useState } from 'react'

interface ErrorProps {
  errorName: string | null
  date: Date | null
}

// quede en la parte de ref, video minuto 58 midudev
export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState<ErrorProps>({ errorName: null, date: null })
  const firstInputUser = useRef(true)

  useEffect(() => {
    if (firstInputUser.current) {
      firstInputUser.current = query === ''
      return
    }

    if (query.startsWith(' ')) return

    if (query === '') {
      setError({ errorName: 'No se puede buscar una pelicula vacia', date: new Date() })
      return
    }

    if (query.length < 3) {
      setError({ errorName: 'La busqueda necesita al menos 3 caracteres', date: new Date() })
      return
    }

    setError({ errorName: null, date: null })
  }, [query])

  return { error, query, setQuery }
}
