import { useState } from 'react'
import { CountryProps } from '../country.type'
import { useFetchCountry } from '../hook/useFetch'
import CardCountry from './CardCountry'

const BASE_URL = `https://restcountries.com/v3.1`

// render component
export default function CountriesPage() {
  const { countries, loading } = useFetchCountry(BASE_URL)
  const [inputValue, setInputValue] = useState<string>('')

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const input = e.currentTarget
    const isInput = input instanceof HTMLInputElement

    if (!isInput || isInput == null) return

    setInputValue(input.value)
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
          <label htmlFor='capitalId'>Searching a capital: </label>
          <input
            id='capitalId'
            type='text'
            value={inputValue}
            onChange={handleOnChange}
            name='capital'
            placeholder='Taipei'
            className='p-2 rounded-md'
          />
          <button>Search</button>
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
