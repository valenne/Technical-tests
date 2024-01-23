export interface CountryProps {
  name: {
    common: string
  }
  capital: string
}

// types
export const FILTERABLE_CAPITALS = [
  'Tallinn',
  'Helsinki',
  'Stockholm',
  'Oslo',
  'Copenhagen',
  'Reykjavik'
] as const

export type Capital = (typeof FILTERABLE_CAPITALS)[number]
