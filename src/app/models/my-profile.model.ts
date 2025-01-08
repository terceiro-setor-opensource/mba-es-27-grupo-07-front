export interface IAddress {
  block: string;
  apartment: string;
}

export interface IMyProfile {
  address: IAddress;
  email: string;
  name: string;
  phone: string;
}
