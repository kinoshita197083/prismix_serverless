const { hello } = require('../handlers/example');

test('hello function returns correct response', async () => {
    const event = {};
    const response = await hello(event);
    const env = process.env.TEST;

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.message).toBe(`Hello from ${env} serverless! testing...`);
});