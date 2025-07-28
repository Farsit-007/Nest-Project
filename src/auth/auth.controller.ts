/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.services';

@Controller('auth')
export class AUthController {
  constructor(private authService: AuthService) {}
  @Post('signin')
  signin() {
    return 'I am Signed in'
  }

  @Post('signup')
  signup() {
     return 'I am Signed up'
  }
}
