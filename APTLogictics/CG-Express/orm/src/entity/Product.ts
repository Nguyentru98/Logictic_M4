import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    quantity: number
    @Column()
    price: string
    
}