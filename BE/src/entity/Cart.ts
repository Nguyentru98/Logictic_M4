import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    productId: string
    @Column()
    cartId: number
    @Column()
    userId: number
    @Column()
    totalprice: number
}