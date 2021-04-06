import {Query} from "type-graphql";
import {User} from "./objects";
import {Service} from "typedi";
import {BaseResolver} from "./base";

@Service()
export class UsersResolver extends BaseResolver {

    @Query(() => [User])
    public async getUsers(): Promise<User[]> {
        return [{
            id: 1,
            first_name: "Peter",
            email_address: "notarealemail@googlemail.com",
            password: "foo",
            second_name: "Lockett",
            is_active: false,
            username: "Cerwym"
        }]
    }
}
