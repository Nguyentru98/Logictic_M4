import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class CartDetail {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    productId: number
    @Column()
    cartId: number
    @Column()
    quantity: number

//     @ManyToOne(()=> User, (user) =>user.id)
//     user : User
//     @ManyToOne(()=> Logictics, (logictics) =>logictics.id)
//     logictics : Logictics
//     @ManyToOne(()=> Product, (product) =>product.id)
//     product : Product
}