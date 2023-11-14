import React, { ReactElement, useRef, useState } from 'react'
import type { Person } from './type/person.type'
import { PERSON_MOCK_INITAL_VALUE } from './mocks/person-data-mock'
import './styles/App.css'
import { CardPerson } from './components/CardPerson'
import { ButtonRandomPerson } from './pages/RandomPerson'
import { useSEO } from './hooks/useSEO'
import { API_URL_CONFIG } from './config/api-config-url'

interface MutableRefObject<T> {
  current: T | null // generic type
};

const useFetchData = (abortController: MutableRefObject<AbortController>) => {
  const [person, setPerson] = useState<Person>(PERSON_MOCK_INITAL_VALUE)
  const [loading, setLoading] = useState<boolean>(false)
  const [done, setIsDone] = useState<boolean>(false)
  const [error, setError] = useState()

  const fetchingPerson = async (): Promise<void> => {
    setLoading(true)
    setIsDone(false)

    try {
      const response = await fetch(API_URL_CONFIG.url('1'), {
        signal: abortController.current?.signal
      })
      if (!response.ok) throw new Error('Fetching Error')

      const person: Person = await response.json()

      if (person.avatar === undefined) return
      setPerson(person)
    } catch (e: any) {
      if (e.name === 'AbortError') {
        console.log('Aborted')
      }
      setError(e)
    } finally {
      setLoading(false)
      setIsDone(true)
    }
  }

  // fetch(API_URL_CONFIG.url('1'), {
  //   signal: abortController.current?.signal
  // })
  //   .then(async (res) => {
  //     if (!res.ok) throw new Error('Fetching Error')

  //     return await res.json()
  //   })
  //   .then((data: Person) => {
  //     if (data.avatar === undefined) return
  //     setPerson(data)
  //   })
  //   .catch((e) => {
  //     if (e.name === 'AbortError') {
  //       console.log('Aborted')
  //     }
  //     setError(e)
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //     setIsDone(true)
  //   })

  const clickReset = (): void => {
    setIsDone(false)
  }

  return {
    person, loading, done, error, clickReset, fetchingPerson
  }
}

export function App (): ReactElement {
  useSEO({ title: 'Practica Fetch', author: 'Nelson Venegas' })
  const abortControllerRef = useRef<AbortController | null>(null)
  const { person, loading, done, clickReset, fetchingPerson } = useFetchData(abortControllerRef)

  const handleClickData = async (): Promise<void> => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()
    await fetchingPerson()
  }

  const handleClickReset = (): void => {
    clickReset()
  }
  return (
    <main>
      <section className='grid place-items-center h-screen'>
        {!done && (<ButtonRandomPerson onClick={handleClickData} loading={loading} />)}
        {done ? <CardPerson loading={loading} person={person} onClick={handleClickReset} /> : null}

      </section>
    </main>
  )
}
