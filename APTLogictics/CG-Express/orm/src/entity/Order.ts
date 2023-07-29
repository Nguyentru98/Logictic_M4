import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Logictics } from "./Logictics";
import { Product } from "./Product";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    shippingday: string
    @Column()
    delivery: string
    @Column()
    address: string
    @Column()
    totalprice: number
    @ManyToOne(()=> User, (user) =>user.id)
    user : User
    @ManyToOne(()=> Logictics, (logictics) =>logictics.id)
    logictics : Logictics
    @ManyToOne(()=> Product, (product) =>product.id)
    product : Product
}