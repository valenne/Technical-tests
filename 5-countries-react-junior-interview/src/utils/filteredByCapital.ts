import { CountryProps } from '../country.type'

export const filteredByCapital = ({ data, filter }: { data: CountryProps[]; filter: string }) => {
  const filtered = data.filter((country) => {
    if (country?.capital === undefined) return
    const capital = country?.capital[0].toLowerCase()

    return capital.includes(filter)
  })

  return { filtered }
}
