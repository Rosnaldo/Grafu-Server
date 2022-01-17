import { IsAlpha, IsUrl, IsOptional, IsDecimal } from 'class-validator'
import { IsObjectId } from 'class-validator-mongo-object-id'
import { IEventDb } from '../entity/event-db'
import { ObjectId } from 'mongodb'
import { IsArrayUrl } from 'src/decorator/is-array-url'
import { IsArrayUuid } from 'src/decorator/is-array-uuid'

type OmitType = 'id' | 'createdAt' | 'updatedAt'

export class EventValidator implements Omit<IEventDb, OmitType> {
  @IsObjectId()
  authorId: ObjectId

  @IsAlpha()
  name: string

  @IsAlpha()
  description: string

  @IsDecimal()
  price: number

  @IsUrl()
  portrait: string

  @IsOptional()
  @IsArrayUrl()
  photos: string[]

  @IsOptional()
  @IsArrayUuid()
  inviteds: ObjectId[]
}
