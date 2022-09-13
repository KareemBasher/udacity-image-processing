import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('tests hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
