import { describe, test, expect } from 'vitest'
import { App } from '../App.tsx'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

describe('<App />', () => {
  test('Fetching data and showing in a card', async () => {
    const user = userEvent.setup()

    render(<App />)

    // get button
    const button = screen.getByRole('button')
    expect(button).toBeDefined()

    // user do a click in the button
    await user.click(button)

    // waiting for loading msn
    const buttonLoadingText = screen.getByRole('button')
    expect(buttonLoadingText.innerHTML).toBe('Loading Information')

    // verified if the card in render

    await waitFor(async () => {
      const card = screen.getByRole('article')
      expect(card).toBeDefined()

      const title = card.querySelector('h1')
      expect(title).toBeDefined()

      // verified a true title
      expect(title?.innerHTML.length).toBeGreaterThan(0)

      // verified a image
      const img = screen.getByRole('img')
      expect(img).toBeDefined()

      // verified if have alt text
      const altImg = img.getAttribute('alt')
      expect(altImg?.length).toBeGreaterThan(0)

      // click on button and delete card
      // button exist?
      const cardButton = card.querySelector('button')
      expect(cardButton).toBeDefined()

      await user.click(cardButton as HTMLButtonElement)

      const buttonPostErase = screen.getAllByRole('button')
      console.log(buttonPostErase.length)
      expect(buttonPostErase.length).toBe(1)
      expect(buttonPostErase[0].innerHTML).toBe('Random Person')
      console.log(buttonPostErase[0].innerHTML)
    })
  })
})
