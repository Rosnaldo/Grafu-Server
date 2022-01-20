import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator'
import { IUserDb } from '../entity/user-db'

type PickType = 'email' | 'password'

export class LoginDto implements Pick<IUserDb, PickType> {
  @ApiProperty({
    description: 'User email',
    example: 'example@email.com',
  })
  @IsEmail()
  @IsString()
  email: string

  /*
    Matches at least one letter and one number
    stackoverflow: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  */
  @ApiProperty({
    description: 'User password',
    example: '******',
  })
  @MinLength(6)
  @MaxLength(20)
  @IsString()
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/)
  password: string
}
