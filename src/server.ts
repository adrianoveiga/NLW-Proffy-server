import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Adriano', age: 32 },
        { name: 'John Doe', age: 40 },
    ]
    return response.json(users);
});

app.listen(3333);
