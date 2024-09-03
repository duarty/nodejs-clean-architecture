import { faker } from '@faker-js/faker'
import { UserProps } from '../../user.entity'

type props = {
  name?: string
  password?: string
  email?: string
  createAt?: Date
}

export function UserDataBuilder(props: props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createAt ?? new Date(),
  }
}
