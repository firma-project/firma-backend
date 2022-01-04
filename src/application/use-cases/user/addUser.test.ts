import faker from 'faker';
import { AddUser } from './AddUser';
import { UserRepository } from '../../../domain/user/UserRepository';
import { User } from '../../../domain/user/User';
import { IUser } from '../../../domain/user/IUser';
import { UserFactory } from '../../../domain/user/UserFactory';

const mockUsers: IUser[] = [
    UserFactory.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        profile: faker.internet.url(),
    }),
    UserFactory.create({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        profile: faker.internet.url(),
    })
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

describe('UseCases: Add User', () => {


    it('Should return update a existing user', async () => {

        const mockUser = {
            ...mockUsers[0],
            name: 'Winglerson'
        }
        const sut = new AddUser(mockUserRepository);
        const updatedUser = await sut.execute(mockUser);
        expect(updatedUser.name).toBe(mockUser.name);

    })

    it('Should return a new user', async () => {

        const mockUser = UserFactory.create({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            profile: faker.internet.url(),
        })
        const sut = new AddUser(mockUserRepository);
        const newUser = await sut.execute(mockUser);
        expect(newUser.name).toBe(mockUser.name);

    })

})