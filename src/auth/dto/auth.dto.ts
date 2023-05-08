import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class Authdto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: ' Password has to be netween 3 to 20 charaters' })
  public password: string;
}
