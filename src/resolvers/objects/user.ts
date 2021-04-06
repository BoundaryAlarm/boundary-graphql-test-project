import {IUser} from "../../types";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class User implements IUser {
    @Field()
    public email_address: string;

    @Field()
    public first_name: string;

    @Field()
    public id: number;

    @Field()
    public is_active: boolean;
    
    @Field()
    public password: string;

    @Field()
    public second_name: string;

    @Field()
    public username: string;
}
