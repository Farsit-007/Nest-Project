/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AUthController } from './auth.controller';
import { AuthService } from './auth.services';

@Module({
    controllers:[AUthController],
    providers : [AuthService]
})
export class AuthModule {}