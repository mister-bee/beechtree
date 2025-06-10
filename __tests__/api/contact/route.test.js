import { POST } from '../../../app/api/contact/route'

const createMockRequest = (body) => ({
  json: async () => body
})

describe('/api/contact', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('returns success response for valid contact form data', async () => {
    const requestBody = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      message: 'Test message'
    }

    const request = createMockRequest(requestBody)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual({
      message: 'Message sent successfully'
    })
    expect(console.log).toHaveBeenCalledWith('Contact Form Submission:', {
      to: 'admin@beechtree.ai',
      from: 'john.doe@example.com',
      subject: 'Contact Form: John Doe',
      text: 'Test message'
    })
  })

  it('returns error response when request body is invalid', async () => {
    const request = {
      json: async () => {
        throw new Error('Invalid JSON')
      }
    }

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data).toEqual({
      error: 'Failed to send message'
    })
    expect(console.error).toHaveBeenCalled()
  })

  it('handles missing required fields gracefully', async () => {
    const requestBody = {
      firstName: 'John'
    }

    const request = createMockRequest(requestBody)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual({
      message: 'Message sent successfully'
    })
  })
})