import { Body, Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserFindOneRepository } from '../repository/find-one.repository';

@ApiTags('user')
@Controller('user')
export class UserFindController {
  constructor(private readonly findOneRepository: UserFindOneRepository) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Find users.',
  })
  async handle(@Body() email: string): Promise<any> {
    return this.findOneRepository.execute({ email });
  }
}
