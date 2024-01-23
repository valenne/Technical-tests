import { CountryProps } from '../country.type'

export default function CardCountry({ name, capital }: CountryProps) {
  const { common: countryName } = name
  return (
    <div className='p-4 w-16 md:w-32 md:shrink-0 lg:w-48 h-fit border border-white mx-auto overflow-hidden'>
      <li className='flex flex-col gap-5'>
        <div className='flex flex-row gap-1'>
          <span>City:</span>
          <p className='tracking-wide'>{countryName}</p>
        </div>
        <div className='flex flex-row gap-1'>
          <span>Capital:</span>
          <p className='tracking-wide'>{capital}</p>
        </div>
      </li>
    </div>
  )
}
