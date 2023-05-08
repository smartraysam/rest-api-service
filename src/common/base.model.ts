import { PrimaryKey, Property } from '@mikro-orm/core';
import { IBaseModel } from './models';

export class BaseModel implements IBaseModel {
  get properties() {
    return ['id', 'createdAt', 'updatedAt', 'active'];
  }

  @PrimaryKey({ name: 'id' })
  id!: number;

  @Property({ defaultRaw: 'now()', type: Date, hidden: true })
  createdAt = new Date();

  @Property({ onUpdate: () => new Date(), type: Date, hidden: true })
  updatedAt = new Date();

  @Property({ default: true, type: 'boolean' })
  active = true;

  static create<T = BaseModel>(this: { new (): T }, props: any): T {
    const instance = new this();
    (Object.keys(props) as Array<keyof T>).forEach((key: keyof T) => {
      instance[key] = props[key];
    });
    return instance;
  }
}
