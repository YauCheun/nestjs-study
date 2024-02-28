import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class Http200Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    res.status(200); // 设置状态码为200
    next();
  }
}
