import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import fs from 'fs-extra'
import path from 'path'
import resize from './util/resize'
import validate from './util/validate'

const port = 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
app.use(express.static('../assets'))

// add routing for /api/images path
app.get('/api/images', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  const filePath = path.join(__dirname, '../assets/full', `${filename}.jpg`)
  const thumbPath = path.join(__dirname, '../assets/thumb', `${filename}_${width}_${height}.jpg`)

  // Checking if the image is already processed and in the thumb folder
  try {
    if (await fs.pathExists(thumbPath)) {
      res.sendFile(thumbPath)
    } else {
      // Using the validate module to validate inputs
      const result = await validate(filePath, width, height)
      if (result) {
        res.send(result)
      } else {
        const resizeResult = await resize(filename, width, height)
        if (resizeResult.result) res.sendFile(thumbPath)
        else console.log(resizeResult.error)
      }
    }
  } catch (err) {
    console.log(err)
  }
})

// start express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
