import {Arg, Mutation, Query} from "type-graphql";
import {User} from "./objects";
import {Service} from "typedi";
import {BaseResolver} from "./base";
import {NewUserInput} from "./inputs/new-user";

@Service()
export class UsersResolver extends BaseResolver {

    @Query(() => [User])
    public async getUsers(): Promise<User[]> {
        return this.userDao.getAll();
    }

    @Query(() => User)
    public async getById(
        @Arg('user_id') userId: number
    ): Promise<User> {
        return this.userDao.getById(userId)
    }

    @Mutation(() => User)
    public async createUser(
        @Arg('input') input: NewUserInput
    ): Promise<User> {

        const {email_address, first_name, second_name, username, password} = input

        return this.userDao.createAndSave({email_address, first_name, second_name, username, password, is_active: true})
    }
}
