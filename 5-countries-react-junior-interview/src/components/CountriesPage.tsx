import { useState } from 'react'
import { CountryProps } from '../country.type'
import { useFetchCountry } from '../hook/useFetch'
import { useSEO } from '../hook/useSEO'
import CardCountry from './CardCountry'

const BASE_URL = `https://restcountries.com/v3.1`

// render component
export default function CountriesPage() {
  const [inputValue, setInputValue] = useState<string>('')
  const { countries, loading } = useFetchCountry(BASE_URL, inputValue)
  useSEO('Prueba Tecnica')

  // MIRAR SI USO HANDLEONCHANGE OR HANDLESUBMIT
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const input = e.currentTarget
    const isInput = input instanceof HTMLInputElement

    if (!isInput || isInput == null) return

    const value = input.value.trimStart()

    setInputValue(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElements = e.currentTarget.elements

    const formInput = formElements.namedItem('capital')

    const isInput = formInput instanceof HTMLInputElement

    if (!isInput || isInput == null) return

    console.log({ value: formInput.value, inputValue })
    formInput.value = ''
  }

  return (
    <div className='container'>
      {loading && 'Information is loading...'}
      <form
        className='flex flex-row items-center justify-center mb-10'
        onSubmit={handleSubmit}>
        <div className='p-5 flex flex-row gap-2 items-center'>
          <label htmlFor='capitalId'>Filter by capital: </label>
          <input
            id='capitalId'
            type='text'
            value={inputValue}
            onChange={handleOnChange}
            name='capital'
            placeholder='Taipei'
            className='p-2 rounded-md ring-1 ring-transparent hover:ring-teal-500 outline-none focus:ring-red-teal active:ring-yellow-500 visited:ring-orange-500 duration-100 ease-linear transition-all'
          />
          <button
            className='border-yellow-500 p-2 hover:border-yellow-600'
            type='submit'>
            Search
          </button>
        </div>
      </form>
      <ul className='flex flex-row gap-5 flex-wrap w-full container'>
        {countries.map((country: CountryProps) => (
          <CardCountry
            key={country.name.common}
            name={country.name}
            capital={country.capital}
          />
        ))}
      </ul>
    </div>
  )
}
