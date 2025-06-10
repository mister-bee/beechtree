import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../../app/contact/page'

global.fetch = jest.fn()

describe('Contact Page', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('renders contact form with all fields', () => {
    render(<Contact />)
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('updates form fields when user types', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Message')
    
    await user.type(firstNameInput, 'John')
    await user.type(lastNameInput, 'Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'Test message')
    
    expect(firstNameInput).toHaveValue('John')
    expect(lastNameInput).toHaveValue('Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(messageInput).toHaveValue('Test message')
  })

  it('submits form successfully', async () => {
    const user = userEvent.setup()
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Message sent successfully' })
    })
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    
    expect(fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        message: 'Test message'
      })
    })
    
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument()
    })
    
    expect(screen.getByLabelText('First Name')).toHaveValue('')
    expect(screen.getByLabelText('Last Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })

  it('shows error message when submission fails', async () => {
    const user = userEvent.setup()
    fetch.mockResolvedValueOnce({
      ok: false
    })
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    
    await waitFor(() => {
      expect(screen.getByText('Failed to send message. Please try again.')).toBeInTheDocument()
    })
  })

  it('shows loading state during submission', async () => {
    const user = userEvent.setup()
    fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 1000)))
    
    render(<Contact />)
    
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    
    expect(screen.getByText('Sending...')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders back to home link', () => {
    render(<Contact />)
    
    const backLink = screen.getByRole('link', { name: /Back to Home/ })
    expect(backLink).toHaveAttribute('href', '/')
  })
})