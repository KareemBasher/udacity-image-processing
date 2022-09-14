import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import fs from 'fs-extra'
import path from 'path'

const port = 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
app.use(express.static('../assets'))

// add routing for / path
app.get('/api/images', async (req: Request, res: Response) => {
  const filename = req.query.filename as string
  const filePath = path.join(__dirname, '../assets/full', filename)
  try {
    const exists = await fs.pathExists(`${filePath}.jpg`)
    if (!exists) throw 'Input file name not found'
  } catch (err) {
    res.send(err)
  }
})

// start express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
