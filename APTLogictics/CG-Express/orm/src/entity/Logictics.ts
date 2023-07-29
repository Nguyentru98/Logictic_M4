import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Logictics {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    price: string
   
}