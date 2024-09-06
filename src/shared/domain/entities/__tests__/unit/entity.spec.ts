import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type EntityProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<EntityProps> {}
describe('Abstract Entity unit tests', () => {
  it('Should be set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '3e1a055e-7715-4ed5-b91a-a53f483265fb'
    const entity = new StubEntity(props, id)
    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toEqual(id)
  })

  it('Should be create a json object', () => {
    const props = { prop1: 'value1', prop2: 15 }
    const id = '3e1a055e-7715-4ed5-b91a-a53f483265fb'
    const entity = new StubEntity(props, id)
    expect(entity.toJson()).toStrictEqual({
      id,
      ...props,
    })
  })
})
