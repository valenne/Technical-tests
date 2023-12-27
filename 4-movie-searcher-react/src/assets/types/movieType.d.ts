export type MoviesAPIResponse = {
  Search: Search[]
  totalResults: string
  Response: string
}

export type TypeProps = string

export type Search = {
  Title: string
  Year: string
  imdbID: string
  Type: TypeProps
  Poster: string
}

export type MappedMovieProps = {
  title: string
  year: string
  id: string
  type: TypeProps
  poster: string
}
