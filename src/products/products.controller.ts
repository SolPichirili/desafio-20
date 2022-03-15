import { Post, Body, Controller, Get, Delete, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/interfaces/product.interface';
import { UpdateProductDto } from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }


    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.productsService.remove(+id);
    }
}
