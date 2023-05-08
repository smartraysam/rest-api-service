export interface IBaseModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}

export interface IUserModel extends IBaseModel {
  name: string;
  email: string;
  password: string;
}
