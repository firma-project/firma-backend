import faker from 'faker';
import { ListUser } from './ListUser';
import { UserRepository } from '../../../domain/user/UserRepository';
import { User } from '../../../domain/user/User';


const mockUsers: User[] = [
    {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        profile: faker.internet.url(),
    },
    {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        profile: faker.internet.url(),
    }
]

const mockUserRepository: UserRepository = {
    add: function (user: User): Promise<User> {
        return new Promise((res, rej) => res(mockUsers[0]));
    },
    list: function (): Promise<User[]> {
        return new Promise((res, rej) => res(mockUsers));
    },
    findByEmail: function (email: string): Promise<User> {
        return new Promise((res, rej) => res(mockUsers[0]));
    },
    update: function (user: User): Promise<User> {
        return new Promise((res, rej) => res(user));
    }
}

describe('UseCases: List User', () => {


    it('Should return a list of users', async () => {

        const sut = new ListUser(mockUserRepository);
        const listUsers = await sut.execute();
        expect(listUsers[0]).toEqual(mockUsers[0]);

    })

})