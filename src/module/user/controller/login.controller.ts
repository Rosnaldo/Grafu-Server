import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger'
import { isNil as _isNil } from 'lodash'
import { CheckPassword } from 'src/helper/bcrypt'
import { HttpResponse } from 'src/helper/http-response'
import { UserFindOneRepository } from '../repository/find-one.repository'
import { LoginDto } from '../swagger-validator/login-dto'

@ApiTags('user')
@Controller('user')
export class UserLoginController {
  constructor(
    private readonly findOneRepository: UserFindOneRepository,
    private readonly checkPassword: CheckPassword
  ) {}

  @Post('login')
  @UsePipes(ValidationPipe)
  async handle(@Body() loginDto: LoginDto): Promise<HttpResponse> {
    const { email, password } = loginDto
    const user = await this.findOneRepository.execute({ email })

    if (_isNil(user)) {
      throw new BadRequestException('Email não cadastrado')
    }

    const isPasswordCorrect = await this.checkPassword.execute(password, user.password)

    if (!isPasswordCorrect) {
      throw new BadRequestException('Senha incorreta')
    }

    return { success: 'Logado com sucesso' }
  }
}
