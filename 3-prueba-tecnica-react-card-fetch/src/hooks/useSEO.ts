import { useEffect } from 'react'

export const useSEO = ({ title, author }: { title: string, author: string }): void => {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="author"]')?.setAttribute('content', author)
    const icon = document.querySelector('link[rel="icon"]')
    icon?.setAttribute('href', '/ghost-solid.svg')
  }, [title, author])
}
