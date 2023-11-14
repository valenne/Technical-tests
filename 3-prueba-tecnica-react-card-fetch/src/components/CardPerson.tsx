import React, { ReactElement } from 'react'
import type { Person } from '../type/person.type'
import { ButtonRandomPerson } from '../pages/RandomPerson'

export const CardPerson = ({ person, loading, onClick }: { person: Person, loading: boolean, onClick: () => void }): ReactElement => {
  return (
    <>
      <div id='card-person' role='article' aria-description='personal card' className='flex flex-col items-center h-screen gap-5 w-full justify-center'>
        <h1>{person.first_name}</h1>
        <div className='max-w-xs'>
          <div className='bg-white shadow-xl rounded-lg py-3'>
            <div className='photo-wrapper p-2'>
              <img className='w-32 h-32 rounded-full mx-auto' src={person.avatar} alt={person.first_name} />
            </div>
            <div className='p-2'>
              <h3 className='text-center text-xl text-gray-900 font-medium leading-8'>{person.first_name}</h3>
              <div className='text-center text-gray-400 text-xs font-semibold'>
                <p>{person.employment?.title}</p>
              </div>
              <table className='text-xs my-3'>
                <tbody>
                  <tr>
                    <td className='px-2 py-2 text-gray-500 font-semibold'>Address</td>
                    <td className='px-2 py-2 text-black'>{person.address.street_address}</td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 text-gray-500 font-semibold'>Phone</td>
                    <td className='px-2 py-2 text-black'>{person.phone_number}</td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 text-gray-500 font-semibold'>Email</td>
                    <td className='px-2 py-2 text-black'>{person.email}</td>
                  </tr>
                </tbody>
              </table>

              <div className='text-center my-3'>
                <a className='text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium' href='/person_information'>View Profile</a>
              </div>
            </div>
          </div>
          <div className='mt-5 mx-auto w-full grid place-items-center'>
            <ButtonRandomPerson loading={loading} onClick={onClick} />
          </div>
        </div>
      </div>

    </>
  )
}
