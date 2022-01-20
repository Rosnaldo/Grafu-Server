import { BadRequestException, Controller, Get, Param } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { isNil as _isNil } from 'lodash'
import { EventFindOneRepository } from '../repository/find-one.repository'

@ApiTags('event')
@Controller('event')
export class EventFindByIdController {
  constructor(private readonly findOneRepository: EventFindOneRepository) {}

  @Get(':eventId')
  @ApiResponse({
    status: 200,
    description: 'Find event.',
  })
  async handle(@Param() eventId: string): Promise<any> {
    const event = await this.findOneRepository.execute({ id: eventId })

    if (_isNil(event)) {
      throw new BadRequestException('Event not found')
    }

    return event
  }
}
