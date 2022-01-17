import { registerDecorator, ValidationOptions } from 'class-validator';
import { ObjectId } from 'mongodb';

export function IsArrayObjectId(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    let fakeElements = [];
    registerDecorator({
      name: 'IsArrayObjectId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        defaultMessage(): string {
          return `[${fakeElements}] is not uuid`;
        },
        validate(value: string[]) {
          fakeElements = [];
          let isArrayObjectId = true;
          value.forEach((element) => {
            const result = ObjectId.isValid(element);
            if (!result) {
              isArrayObjectId = result;
              fakeElements.push(element);
            }
          });
          return isArrayObjectId;
        },
      },
    });
  };
}
