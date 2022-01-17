import { IsAlpha, IsEmail, IsOptional, IsUrl, Matches, MaxLength, MinLength } from 'class-validator'
import { IUserDb } from '../entity/user-db'

type OmitType = 'id' | 'createdAt' | 'updatedAt'

export class UserValidator implements Omit<IUserDb, OmitType> {
  @IsEmail()
  email: string

  @IsOptional()
  @IsAlpha()
  firstName: string

  @IsOptional()
  @IsAlpha()
  lastName: string

  /*
    Matches at least one letter and one number
    stackoverflow: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  */
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/)
  password: string

  @IsOptional()
  @IsUrl()
  avatar: string
}
