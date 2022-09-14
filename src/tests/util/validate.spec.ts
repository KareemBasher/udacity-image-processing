import path from 'path'
import validate from '../../util/validate'

describe('Validating input arguments', () => {
  it('should not throw error if input file found', async () => {
    const filePath = path.join(__dirname, '../../../assets/full/monkey.jpg')
    expect(await validate(filePath, 200, 200)).toEqual(false)
  })

  it('should throw error if input file is not found', async () => {
    const filePath = path.join(__dirname, '../../../assets/full/monkeyee')
    expect(await validate(filePath, 200, 200)).toMatch('Input file does not exist.')
  })

  it('should throw error if width is not valid', async () => {
    const filePath = path.join(__dirname, '../../../assets/full/monkey.jpg')
    expect(await validate(filePath, -200, 200)).toMatch('Invalid input width')
  })

  it('should throw error if height is not valid', async () => {
    const filePath = path.join(__dirname, '../../../assets/full/monkey.jpg')
    expect(await validate(filePath, 200, -200)).toMatch('Invalid input height')
  })
})
