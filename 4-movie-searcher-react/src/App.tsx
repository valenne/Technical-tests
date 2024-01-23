import MovieCard from './assets/components/MovieCard'
import { useHandleEvents } from './assets/hooks/useHandleEvents'
import { useMovies } from './assets/hooks/useMovies'
import { useSearch } from './assets/hooks/useSearch'

function App() {
  const { error, query, setQuery } = useSearch()
  const { mappedMovies } = useMovies()
  const { handleSubmit, handleChange } = useHandleEvents(query, setQuery)

  return (
    <div className='flex flex-col  gap-10 mx-auto h-screen bg-gray-800 text-white px-10'>
      <div className='max-w-5xl mt-10 text-white mx-auto'>
        <header className='flex flex-col gap-10 items-center'>
          <h1 className='text-4xl'>Movies: Find what do you like.</h1>
          <p
            className={`font-semibold ${
              error.errorName ? 'text-red-700 text-center' : 'text-transparent'
            }`}>
            {error.errorName}
          </p>
          <form
            method='POST'
            className='flex flex-col md:flex-row gap-6 md:gap-3'
            onSubmit={handleSubmit}
            id='form'>
            <label>
              <input
                className='w-full rounded-md px-4 py-2 text-black font-semibold'
                placeholder='Avengers, Start Wars...'
                name='query-input'
                type='text'
                onChange={handleChange}
              />
            </label>
            <button
              className='font-semibold px-4 py-2 rounded-md w-fit mx-auto shadow-sm hover:shadow-lg bg-yellow-500 border border-black hover:border-yellow-500 text-black hover:text-white hover:bg-black ease-in transition-all duration-300'
              type='submit'
              name='button-movie'>
              Buscar
            </button>
          </form>
        </header>
      </div>
      <main>
        <MovieCard movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
