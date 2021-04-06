import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IUser} from "../types";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public email_address: string;

    @Column()
    public first_name: string;

    @Column()
    public is_active: boolean;

    @Column()
    public password: string;

    @Column()
    public second_name: string;

    @Column()
    public username: string;
}
