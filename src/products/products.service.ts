import { Injectable } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];
    create(product: Product) {
        this.products.push(product);
    }

    findAll(): Product[] {
        return this.products;
    }

    update(id: number, product: object) {
        const element = this.products.find(e => e.id === id);
        const indexOfElement = this.products.findIndex(e => e.id === id);
        const updatedList = {
            ...element,
            ...product
        }

        this.products[indexOfElement] = updatedList;
        return updatedList;
    }

    remove(id: number) {
        const indexOfElement = this.products.findIndex(e => e.id === id);
        this.products.splice(indexOfElement, 1);
    }
}
