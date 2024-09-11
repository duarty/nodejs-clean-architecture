import { UserValidator, UserValidatorFactory } from '../../user.validators'

let sut: UserValidator
describe('UserValidator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create()
  })
  describe('Name field', () => {
    it('Invalidation cases for name field', () => {
      const isValid = sut.validate(null)
      expect(isValid).toBeFalsy()
    })
  })
})
