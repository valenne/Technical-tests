import { mocks } from '../mocks/mockImport'

export function useMovies() {
  const dataMovies = mocks.movieWithResults.Search

  const mappedMovies = dataMovies?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type === 'movie' ? 'movie' : 'series',
      poster: movie.Poster
    }
  })

  return { mappedMovies }
}
