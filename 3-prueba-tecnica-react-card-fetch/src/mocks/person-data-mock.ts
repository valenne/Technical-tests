import type { Person } from '../type/person.type'

export const PERSON_MOCK_INITAL_VALUE: Person = {
  id: 5260,
  uid: '71173af7-5449-4d42-a85b-994ab5550fc7',
  password: 'iZtgPhveDN',
  first_name: 'Hugh',
  last_name: 'Skiles',
  username: 'hugh.skiles',
  email: 'hugh.skiles@email.com',
  avatar: 'https://robohash.org/explicaboauteaque.png?size=300x300&set=set1',
  gender: 'Genderfluid',
  phone_number: '+261 1-545-070-0303',
  social_insurance_number: '655659050',
  date_of_birth: '1966-04-21',
  employment: {
    title: 'Direct Sales Manager',
    key_skill: 'Teamwork'
  },
  address: {
    city: 'Lake Terrance',
    street_name: 'Hermiston Valleys',
    street_address: "479 O'Connell Grove",
    zip_code: '17355',
    state: 'Rhode Island',
    country: 'United States',
    coordinates: {
      lat: 29.00742889450561,
      lng: 167.45972469602242
    }
  },
  credit_card: {
    cc_number: '4706-0203-6062-9080'
  },
  subscription: {
    plan: 'Free Trial',
    status: 'Active',
    payment_method: 'Alipay',
    term: 'Monthly'
  }
}
