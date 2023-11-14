import React, { ReactElement } from 'react'

export const ButtonRandomPerson = ({ loading, onClick }: { loading: boolean, onClick: () => void }): ReactElement => {
  return (
    <>
      <button onClick={onClick} className='px-4 py-2 bg-white text-black cursor-pointer rounded-md hover:bg-teal-800 hover:text-white ease-linear duration-150'>
        {loading ? 'Loading Information' : 'Random Person'}
      </button>

    </>
  )
}
