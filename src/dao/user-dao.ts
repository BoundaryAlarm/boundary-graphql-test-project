import {Service} from "typedi";
import {InjectRepository} from "typeorm-typedi-extensions";
import {BOUNDARY_APP_NAME} from "../entities";
import {Repository} from "typeorm";
import {User} from "../entities/user";
import {IUser} from "../types";

@Service()
export class UserDao {

    constructor(
        @InjectRepository(User, BOUNDARY_APP_NAME)
        private readonly userRepository: Repository<User>
    ) {
    }

    public async createAndSave(newUserPayload: Partial<User>): Promise<User> {
        return this.userRepository.save(newUserPayload)
    }

    public async getAll(): Promise<IUser[]> {
        return this.userRepository.find();
    }

    public async getById(userId: number): Promise<IUser> {
        return this.userRepository.findOneOrFail(userId);
    }

    public async getByActiveStatus(status: boolean): Promise<IUser[]> {
        return this.userRepository.createQueryBuilder('u')
            .select()
            .where('u.is_active := status', {status})
            .getMany();
    }
}
