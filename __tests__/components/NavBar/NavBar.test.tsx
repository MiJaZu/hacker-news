import { render, screen } from '@testing-library/react'
import NavBar from '@/components/NavBar'

describe('All Page', () => {
  it('Title should be displayed with the Name HACKER NEWS', () => {
    const navTitle = 'HACKER NEWS';
    render(<NavBar title={navTitle} />)
    const span = screen.getByText(navTitle);
    expect(span).toBeInTheDocument()
  })

  it('Tag Nav is being created in the NavBar component', () => {
    const navTitle = 'HACKER NEWS';
    render(<NavBar title={navTitle} />)
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument()
  })
})
