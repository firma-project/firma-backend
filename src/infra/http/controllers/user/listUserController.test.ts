import { HttpRequest, HttpResponse } from '../../protocols';
import { HttpStatusCode } from '../../utils/HttpEnum';
import faker from 'faker';
import { ListUserController } from './ListUserController';
import { User } from '../../../../domain/user/User';
import { UserRepository } from '../../../../domain/user/UserRepository';
import { ListUser } from "../../../../application/use-cases/user/ListUser";
import userSchema from '../../../schemas/UserSchema';


const mockUserRepository: UserRepository = {
    add: function (user: User): Promise<User> {
        throw new Error('Function not implemented.');
    },
    list: function (): Promise<User[]> {
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
        return new Promise((res, rej) => res(mockUsers));
    },
    findByEmail: function (email: string): Promise<User> {
        throw new Error('Function not implemented.');
    },
    update: function (user: User): Promise<User> {
        throw new Error('Function not implemented.');
    }
}

const mockListUser = new ListUser(mockUserRepository);

jest.mock('../../../schemas/UserSchema', () => {
    return {
        list: function () {
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
            return new Promise((res, rej) => res(mockUsers));
        }
    }
})


const sut = new ListUserController();



describe('Controller: List User', () => {

    test('Should return ok response', async () => {
        

        await jest.spyOn(mockListUser, 'execute')
            .mockImplementationOnce(async () => mockUserRepository.list());
        const result = await sut.handle();
        
        expect(result.statusCode).toBe(HttpStatusCode.OK)
    })



})