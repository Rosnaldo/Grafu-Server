import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateHash } from 'src/helper/bcrypt'
import { HttpResponse } from 'src/helper/http-response'
import { UserFindOneRepository } from '../repository/find-one.repository'
import { UserInsertOneRepository } from '../repository/insert-one.repository'
import { RegisterDto } from '../swagger-validator/register-dto'

@ApiTags('user')
@Controller('user')
export class UserRegisterController {
  constructor(
    private readonly findOneRepository: UserFindOneRepository,
    private readonly createHash: CreateHash,
    private readonly insertOneRepository: UserInsertOneRepository
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async handle(@Body() registerDto: RegisterDto): Promise<HttpResponse> {
    const { email, password } = registerDto
    const user = await this.findOneRepository.execute({ email })

    if (user) {
      throw new BadRequestException('Email já cadastrado')
    }

    const bycrptPassword = await this.createHash.execute(password)
    this.insertOneRepository.execute({ data: { email, password: bycrptPassword } })

    return { success: 'Registrado com sucesso' }
  }
}
