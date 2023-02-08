import supertest from 'supertest';
import app from '../server';

// Testing the End Points
const request = supertest(app);
describe('Product\'s End Points', () => {
    it('Test the Product Create endpoint response', async () => {
        const response = await request.post('/products').set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM')
            .send({
            name: "oven",
            price: 1000
        });
        expect(response.statusCode).toBe(200);
    });
    it('Test the Product Create endpoint response to be unauthorized', async () => {
        const response = await request.post('/products').send({
            name: "oven",
            price: 1000
        });
        expect(response.statusCode).toBe(401);
    });
  it('Test the Product Index endpoint responses', async () => {
    const response = await request.get(
      '/products'
    );
    expect(response.statusCode).toBe(200);
  });

  it('Test the Product Show endpoint responses', async () => {
    const response = await request.get(
      '/products/1'
    );
    expect(response.statusCode).toBe(200);
  });
});

describe('Order\'s End Points', () => {
    it('Test the Order Show endpoint response', async () => {
        const response = await request.get('/orders/1').set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM');
        expect(response.statusCode).toBe(200);
    });
    it('Test the Order Show endpoint response to be unauthorized', async () => {
        const response = await request.get('/orders/1');
        expect(response.statusCode).toBe(401);
    });
});
describe('User\'s End Points', () => {
    it('Test the User Create endpoint response', async () => {
        const response = await request.post('/users').set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM')
            .send({
                firstname: "anas",
                lastname: "hesham",
                password: "password123"
            });
        expect(response.statusCode).toBe(200);
    });
    it('Test the User Create endpoint response to be unauthorized', async () => {
        const response = await request.post('/users').send({
            firstname: "anas",
            lastname: "hesham",
            password: "password123"
        });
        expect(response.statusCode).toBe(401);
    });
  it('Test the User Index endpoint response', async () => {
    const response = await request.get(
      '/users'
    ).set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM'
    );
    expect(response.statusCode).toBe(200);
  });
  it('Test the User Index endpoint responses to be unauhtorized', async () => {
    const response = await request.get(
      '/users'
    );
    expect(response.statusCode).toBe(401);
  });
  it('Test the User Show endpoint response', async () => {
    const response = await request.get(
      '/users/1'
    ).set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM'
    );
    expect(response.statusCode).toBe(200);
  });
  it('Test the User Show endpoint response to be unauthorized', async () => {
    const response = await request.get(
      '/users/1'
    );
    expect(response.statusCode).toBe(401);
  });
});
  
