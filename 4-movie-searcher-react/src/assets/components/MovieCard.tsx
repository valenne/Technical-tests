import { MappedMovieProps } from '../types/movieType'

type MoviesProps = {
  movies: MappedMovieProps[]
}

// with results
function ListOfMovies({ movies }: MoviesProps) {
  return (
    <div className='card-grid'>
      {movies.map((movie) => (
        <article
          key={movie.id}
          className='w-full relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 mx-auto mt-24'>
          <img
            src={movie.poster}
            alt={movie.title}
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
          <h3 className='z-10 mt-3 text-xl sm:text-2xl  font-bold text-white'>{movie.title}</h3>
          <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
            {movie.year}
          </div>
        </article>
      ))}
    </div>
  )
}

// no results
function WithoutMovies() {
  return <h3 className='text-xl text-center font-bold'>Whithout Results</h3>
}

export default function MovieCard({ movies }: MoviesProps) {
  const hasMovies = movies?.length > 0

  return <>{hasMovies ? <ListOfMovies movies={movies} /> : <WithoutMovies />}</>
}
