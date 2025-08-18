/* eslint-disable prettier/prettier */
import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma : PrismaService){}
  signin() {
    return {
      message: 'Sign In IN',
    };
  }
  signup(@Req() req : Request) {
    console.log(req);
    return {
      message: 'Sign Up',
    };
  }
}


w