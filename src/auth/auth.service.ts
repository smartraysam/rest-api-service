/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Authdto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor() {}

  async signup(dto: Authdto) {
    const { email, password } = dto;
    return { message: 'This is signup' };
  }
  async signin() {
    return { message: 'This is signup' };
  }
  async signout() {
    return { message: 'This is signup' };
  }
}
