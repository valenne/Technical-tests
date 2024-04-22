export type Users = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export type Geo = {
  lat: string
  lng: string
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type APIURL = string

const API_JSON_URL = 'https://jsonplaceholder.typicode.com/users'

async function fetchingData(url: APIURL) {
  let users: Users

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Error, fetching the API')

    const data = await response.json()
    if (!data) throw new Error('Error, not data recovery')

    users = data
  } catch (error) {
    console.log('Error Fetching data ', error)
  }
  return users
}

fetchingData(API_JSON_URL).then((response) => console.log(response))
