import { BadRequestException, Controller, Get, Param } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { isNil as _isNil } from 'lodash'
import { HttpResponse } from 'src/helper/http-response'
import { EventFindOneRepository } from '../repository/find-one.repository'

@ApiTags('event')
@Controller('event')
export class EventFindByIdController {
  constructor(private readonly findOneRepository: EventFindOneRepository) {}

  @Get(':eventId')
  async handle(@Param() eventId: string): Promise<HttpResponse> {
    const event = await this.findOneRepository.execute({ id: eventId })

    if (_isNil(event)) {
      throw new BadRequestException('Event not found')
    }

    return { data: event, success: 'Event found' }
  }
}
