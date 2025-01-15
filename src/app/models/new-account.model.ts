export interface IAddress {
    block: string;
    apartment: string;
}

export interface INewAccount {
    address: IAddress;
    name: string;
    email: string;
    phone: string;
    password: string;
}