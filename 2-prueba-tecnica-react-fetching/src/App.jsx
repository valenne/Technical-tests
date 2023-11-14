import React, { useEffect, useState } from 'react'
import { API_URL } from './config/config-env.js'
import { useSEO } from './hooks/useSEO.js'
import './App.css'

const INITIAL_STATE = 'Los gatitos son lindos'

function App () {
  const [fact, setFact] = useState(INITIAL_STATE)
  const [imageUrl, setImageUrl] = useState({ id: '', url: '' })
  useSEO('Prueba de React 🚀', 'Valentin Venegas')

  // Recupero la frase o hito
  useEffect(() => {
    fetch(API_URL.cat_endpoint_random_fact)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Teniendo la frase, cargo la imagen
  useEffect(() => {
    if (!fact) return

    const threeWordsSplitArgument = fact.split(' ', 3).join(' ')

    fetch(API_URL.cat_endpoint_image_url(threeWordsSplitArgument, 'red'))
      .then(res => res.json())
      .then(data => {
        const id = data._id
        const url = `https://cataas.com/cat/cute/says/${threeWordsSplitArgument}`
        console.log(url)
        setImageUrl({ id, url })
      })
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl.url}
            alt='Image sacada de manera random de la peticion de una api externa'
            id={imageUrl.id}
          />
        )}
      </section>
    </main>
  )
}

export default App
