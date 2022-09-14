import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('tests server endpoint', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(200)
  })
})
