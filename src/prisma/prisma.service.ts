/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources : {
                db : {
                    url : "postgresql://postgres:12345@localhost:5432/Nest?schema=public"
                }
            }
        })
    }
}
