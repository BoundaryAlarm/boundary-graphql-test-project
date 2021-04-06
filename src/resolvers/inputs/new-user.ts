import {Field, InputType} from "type-graphql";

@InputType()
export class NewUserInput {

    @Field()
    public email_address: string;

    @Field()
    public first_name: string;

    @Field()
    public password: string;

    @Field()
    public second_name: string;

    @Field()
    public username: string;
}
