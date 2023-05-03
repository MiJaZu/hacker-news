import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('All Page', () => {
  it('Title should be displayed with the name hacker news', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
