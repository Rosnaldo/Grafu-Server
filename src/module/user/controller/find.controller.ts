import { Logger, Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserFindController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Find users.',
  })
  async handle(): Promise<any> {
    new Logger('Enter in Create');
    return {};
  }
}
