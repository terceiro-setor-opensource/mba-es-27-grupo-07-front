export interface IAds {
  title: string;
  description: string;
  price: number;
  status: 'ativo' | 'inativo';
  image?: string;
  user_id?: string;
}
