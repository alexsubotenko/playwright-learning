import {test, expect} from '@playwright/test';

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
}

test('get user', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
    const body = await response.json() as User;
    console.log(body);
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');
    expect(body.email).toBe('Sincere@april.biz');
});

test('create user', async ({request}) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: 'Oleksandr',
            email: 'alex@test.com'
        }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body);
    expect(body.name).toBe('Oleksandr');
    expect(body.email).toBe('alex@test.com');
    expect(body.id).toBeDefined();
});

test('delete user', async ({request}) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
});

test('upadate user', async ({request}) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
        data: {
            name: 'Andrii'
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe('Andrii');
    console.log(body);
})

test('patch user', async ({request}) => {
    const response = await request.patch('https://jsonplaceholder.typicode.com/users/1', {
        data: {
            email: 'newemail@test.com'
        }
    }) 
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    expect(body.email).toBe('newemail@test.com');
})
