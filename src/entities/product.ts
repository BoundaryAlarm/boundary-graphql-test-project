import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IProduct} from "../types";

@Entity()
export class Product implements IProduct {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: "float"})
    public cost: number;

    @Column()
    public display_name: string;
}
