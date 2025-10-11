import { QueryResult } from "pg"
import { query } from "../database/query"

export interface CreateProductInterface {
    name: string;
    description: string;
    price: number;
    stockQuantity: number
    isActive: boolean
}

export interface UpdateProductInterface {
    name: string | null;
    description: string | null;
    price: number | null;
    stockQuantity: number | null;
    isActive: boolean | null;
}

interface ProductInterface {
    id: number
    name: string
    description: string
    price: number
    stock_quantity: number
    is_active: boolean
    created_at: Date
    updated_at: Date
}

export class Product {
    id: number
    name: string
    description: string
    price: number
    stockQuantity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date

    constructor(productRow: ProductInterface) {
        this.id = productRow.id;
        this.name = productRow.name;
        this.description = productRow.description;
        this.price = productRow.price;
        this.stockQuantity = productRow.stock_quantity;
        this.isActive = productRow.is_active;
        this.createdAt = productRow.created_at;
        this.updatedAt = productRow.updated_at;
    }

    static async findAll() {
        const result = await query(`SELECT * FROM products`)

        if (result.rowCount === 0) {
            return { message: "product not found" }
        }

        return result.rows.map((row) => new Product(row))
    }

    static async findById(id: number) {
        const result = await query(`SELECT * FROM products where id = $1`, [id])

        if (result.rowCount === 0) {
            return null
        }
        return new Product(result.rows[0])
    }

    static async create(attributes: CreateProductInterface) {
        const { name, description, price, stockQuantity, isActive } = attributes
        const result = await query(`
            INSERT INTO products (name, description, price, stock_quantity, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *
            `, [name, description, price, stockQuantity, isActive])
        return new Product(result.rows[0])
    }

    static async update(id: number, attributes: Partial<UpdateProductInterface>) {
        const toUpdate = await this.findById(id)

        if (!toUpdate) {
            return null
        }

        const name = attributes.name ?? toUpdate.name;
        const description = attributes.description ?? toUpdate.description;
        const price = attributes.price ?? toUpdate.price;
        const stockQuantity = attributes.stockQuantity ?? toUpdate.stockQuantity;
        const isActive = attributes.isActive ?? toUpdate.isActive;


        const result = await query(`
            update products set name = $1, description = $2, price = $3, stock_quantity = $4, is_active = $5, updated_at = $6 where id = $7 RETURNING *
            `, [name, description, price, stockQuantity, isActive, new Date(), id])
        return new Product(result.rows[0])
    }

    static async delete(id: number) {
        const result = await query(`
            DELETE FROM products where id = $1 RETURNING *
            `, [id])

        if (result.rowCount === 0) {
            return null
        }

        return new Product(result.rows[0])
    }
}