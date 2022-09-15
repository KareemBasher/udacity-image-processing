import resize from '../../util/resize'
import path from 'path'

describe('Test resize function response', () => {
  it('should not throw error', () => {
    const filePath = path.join(__dirname, '../../../assets/full/monkey.jpg')
    expect(resize(filePath, 200, 200)).toBeTruthy()
  })

  it('returns false with an error message if file name is invalid', () => {
    const filePath = path.join(__dirname, 'monkeyyee.jpg')
    expect(async () => {
      ;(await resize(filePath, 200, 200)).result
    }).toBeFalse

    expect(async () => {
      ;(await resize(filePath, 200, 200)).error
    }).toBeTruthy
  })
})
