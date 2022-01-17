import { registerDecorator, ValidationOptions } from 'class-validator'

import validator from 'validator'

export function IsArrayUrl(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    let fakeElements = []
    registerDecorator({
      name: 'IsArrayUrl',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        defaultMessage(): string {
          return `[${fakeElements}] is not url`
        },
        validate(value: string[]) {
          fakeElements = []
          let isOnlyUrl = true
          value.forEach((element) => {
            const result = validator.isURL(element)
            if (!result) {
              isOnlyUrl = result
              fakeElements.push(element)
            }
          })
          return isOnlyUrl
        },
      },
    })
  }
}
