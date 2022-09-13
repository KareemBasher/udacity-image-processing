import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'

const port = 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  
})

// start express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
