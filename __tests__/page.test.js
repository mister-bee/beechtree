import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('BeechTree')
  })

  it('renders the subtitle', () => {
    const subtitle = screen.getByText('Empowering Educators with Safe, Reliable AI Tools')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the classroom image', () => {
    const image = screen.getByAltText('Students in classroom')
    expect(image).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    const ctaButton = screen.getByRole('link', { name: 'Explore Our Software' })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/software')
  })

  it('renders feature sections', () => {
    expect(screen.getByText('Safe & Private AI')).toBeInTheDocument()
    expect(screen.getByText('Teacher-Friendly Interface')).toBeInTheDocument()
  })

  it('renders testimonial section', () => {
    expect(screen.getByText('What Educators Say')).toBeInTheDocument()
    expect(screen.getByText(/BeechTree has revolutionized/)).toBeInTheDocument()
    expect(screen.getByText('— School Principal')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    const contactLink = screen.getByLabelText('Contact Us')
    const paymentLink = screen.getByLabelText('Payment')
    
    expect(contactLink).toHaveAttribute('href', '/contact')
    expect(paymentLink).toHaveAttribute('href', '/payment')
  })

  it('renders current year in copyright', () => {
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} BeechTree LLC`)).toBeInTheDocument()
  })
})