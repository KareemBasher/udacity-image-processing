import fs from 'fs-extra'
import path from 'path'
import sharp from 'sharp'

interface Result {
  result: boolean
  error?: unknown
}

const resize = async (name: string, width: number, height: number): Promise<Result> => {
  const filePath = path.join(__dirname, '../../assets/full', `${name}.jpg`)
  const thumbPath = path.join(__dirname, '../../assets/thumb')
  const output = `${thumbPath}/${name}_${width}_${height}.jpg`

  // Creating the output file in the thumb folder and then resizing the image
  try {
    await fs.createFile(output)
    await sharp(filePath).resize(width, height).toFile(output)
    return { result: true }
  } catch (err) {
    return { result: false, error: err }
  }
}

export default resize
