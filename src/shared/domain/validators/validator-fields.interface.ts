export type FieldsErrors = {
  [field: string]: Array<string>
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean
}
