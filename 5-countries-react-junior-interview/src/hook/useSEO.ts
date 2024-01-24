import { useEffect } from 'react'

export function useSEO(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
