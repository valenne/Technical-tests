import { useEffect } from 'react'

export const useSEO = (title, name) => {
  useEffect(() => {
    document.title = title
    document.querySelector("meta[name='author']")?.setAttribute('content', name)
  }, [title, name])
}
