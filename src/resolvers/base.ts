import {Resolver} from "type-graphql";
import {UserDao} from "../dao/user-dao";
import {Inject} from "typedi";

@Resolver()
export abstract class BaseResolver {

    @Inject(() => UserDao)
    protected userDao: UserDao
}
