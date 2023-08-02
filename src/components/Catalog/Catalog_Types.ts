export interface Product {
    id: number,
    itemId: string,
    category: string,
    name: string,
    capacity: string,
    fullPrice: number,
    color: string,
    price: number,
    screen: string,
    ram: string,
    year: string,
    image_id: number,
  }

export type ProductCollection = Product[];

export enum SortType {
    
}

export const SortingOpgions = ['Newest', 'Oldest', 'Prise'];
export const PaginationOptions: string[] = ['16', '32', '64'];