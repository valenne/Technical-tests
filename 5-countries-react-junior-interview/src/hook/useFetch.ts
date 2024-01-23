import { useEffect, useState } from 'react'
import { CountryProps } from '../country.type'

// fetching countries
export const useFetchCountry = (url: string) => {
  const [countries, setCountries] = useState<CountryProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${url}/all`)
      .then((response) => {
        if (!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`)
        return response.json()
      })
      .then((data: CountryProps[]) => {
        const res = data.map(({ name, capital }) => {
          const value = {
            name: {
              common: name.common
            },
            capital
          }

          return value
        })

        setCountries(res)
      })

      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message)
        }
      })
      .finally(() => {
        {
          setLoading(false)
        }
      })
  }, [url])

  return { countries, loading }
}
