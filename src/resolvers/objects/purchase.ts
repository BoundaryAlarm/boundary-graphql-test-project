import {IPurchase} from "../../types";
import {Field} from "type-graphql";

export class Purchase implements IPurchase {

    @Field()
    public product_id: number;

    @Field()
    public quantity: number;

    @Field()
    public user_id: number;
}
