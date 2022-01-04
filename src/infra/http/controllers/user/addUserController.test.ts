import { HttpRequest, HttpResponse } from '../../protocols';
import { HttpStatusCode } from '../../utils/HttpEnum';
import { UserFactory } from '../../../../domain/user/UserFactory';
import faker from 'faker';
import { AddUserController } from './AddUserController';
import { User } from '../../../../domain/user/User';

const mockRequestValid: HttpRequest = {
    body: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        profile: faker.internet.url(),
        uid: faker.datatype.uuid(),
        sessionToken: faker.datatype.uuid(),
    }
}
const mockRequestInvalid: HttpRequest = {
    body: {
        name: faker.name.firstName(),
        uid: faker.datatype.uuid(),
        sessionToken: faker.datatype.uuid(),
    }
}

const mockUser = UserFactory.create({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profile: faker.internet.url(),
})

const sut = new AddUserController();

describe('Controller: Add User', () => {

    test('Should return bad response for invalid user', async () => {

        const result = await sut.handle(mockRequestInvalid);
        
        expect(result.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })

    test('Should return ok response for valid user', async () => {

        jest.spyOn(UserFactory, 'create').mockImplementationOnce(() => mockUser);
        
        const result = await sut.handle(mockRequestValid);
        
        expect(result.statusCode).toBe(HttpStatusCode.OK)
    })

})