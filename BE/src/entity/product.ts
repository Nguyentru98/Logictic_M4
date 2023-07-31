import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    price: number
    @Column()
    quantity: number
    @Column()
    image: string
    
}