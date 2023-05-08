import { Entity, Property } from '@mikro-orm/core';
import { BaseModel } from '../../common/base.model';
import { IUserModel } from '../../common/models';

@Entity()
class User extends BaseModel implements IUserModel {
  @Property({ unique: true })
  public email: string;

  @Property()
  public name: string;

  @Property()
  public password: string;
}

export default User;
