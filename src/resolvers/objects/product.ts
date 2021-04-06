import {Field, ObjectType} from "type-graphql";
import {IProduct} from "../../types";

@ObjectType()
export class Product implements IProduct {

    @Field()
    public cost: number;

    @Field()
    public display_name: string;

    @Field()
    public id: number;
}
