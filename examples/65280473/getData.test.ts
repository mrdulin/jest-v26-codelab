import axios from 'axios';
import getData from './getData';

jest.mock('axios');

const maxios = axios as jest.Mocked<typeof axios>;

describe('user page page', () => {
  it('should fetch users', () => {
    const users = {
      _embedded: {
        persons: [
          {
            role: {
              id: 1,
              roleName: 'Administrator',
              description: 'Administers the systems and user.',
            },
            active: true,
            email: 'user@test.com',
            firstName: 'Administrator',
            lastName: 'System',
            username: 'admin',
            id: 1,
            _links: {
              self: { href: 'http://users:8080/users/api/data/persons/1' },
              person: {
                href: 'http://users:8080/users/api/data/persons/1{?projection}',
                templated: true,
              },
              role: { href: 'http://users:8080/users/api/data/persons/1/role' },
            },
          },
        ],
      },
    };

    const response = { data: users };

    maxios.get.mockResolvedValue(response);
    return getData().then((resp) => {
      expect(resp).toEqual(users._embedded.persons);
      expect(maxios.get).toBeCalledWith('/persons', {
        headers: {
          Authorization: `Bearer null`,
        },
      });
    });
  });
});
