import fs from 'fs-extra'

const validate = async (
  path: string,
  width: number,
  height: number
): Promise<string | boolean | Error> => {
  try {
    // Validating the input file
    if (!(await fs.pathExists(path))) return 'Input file does not exist.'

    // Validating the input width
    if (!width || isNaN(width) || width < 0) return 'Invalid input width'

    // Validation the input height
    if (!height || isNaN(height) || height < 0) return 'Invalid input height'
  } catch (err) {
    console.log(err)
  }
  return false
}
export default validate
