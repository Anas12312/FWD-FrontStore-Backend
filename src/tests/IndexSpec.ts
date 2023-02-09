import supertest from 'supertest';
import { OrderStore } from '../models/order';
import { ProductStore } from '../models/product';
import { UserStore } from '../models/user';
import app from '../server';

// Models Testing

// Product Model Tests
const productStore = new ProductStore()

describe("Product Model", () => {
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });
  it('should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await productStore.create({
        name: "fridge",
        price: 1000
    });
    expect(result).toEqual({
      id: 1,
      name: "fridge",
      price: 1000
    });
  });

  it('index method should return a list of products', async () => {
    const result = await productStore.index();
    expect(result).toEqual([{
      id: 1,
      name: 'fridge',
      price: 1000
    }]);
  });

  it('show method should return the correct product', async () => {
    const result = await productStore.show("1");
    expect(result).toEqual({
      id: 1,
      name: 'fridge',
      price: 1000
    });
  });

});

// User Model Testing
const userStore = new UserStore()

describe("User Model", () => {
  it('should have an index method', () => {
    expect(userStore.index).toBeDefined();
  });


  it('should have a create method', () => {
    expect(userStore.create).toBeDefined();
  });

  it('create method should add a user', async () => {
    
    const result = await userStore.create({
        firstname: "anas",
        lastname: "hesham",
        password: "password123"
    });
    expect(result).toEqual(jasmine.objectContaining({
        id: 1,
        firstname: "anas",
        lastname: "hesham"
    }));
  });

  it('index method should return a list of users', async () => {
    const result = await userStore.index();
    expect(result).toEqual([jasmine.objectContaining({
        id: 1,
        firstname: "anas",
        lastname: "hesham"
    })]);
  });
  it('show method should return the correct user', async () => {
    const result = await userStore.show("1");
    expect(result).toEqual(jasmine.objectContaining({
      id: 1,
      firstname: "anas",
      lastname: "hesham"
    }));
  });

});

// Order Model Testing
const orderStore = new OrderStore()

describe("Order Model", () => {
  it('should have a show method', () => {
    expect(orderStore.show).toBeDefined();
  });

    it('show method should return the correct order', async () => {
      expect(await orderStore.show("1")).not.toBeDefined();
    });

});

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
        const response = await request.post('/users').send({
                firstname: "anas",
                lastname: "hesham",
                password: "password123"
            });
        expect(response.statusCode).toBe(200);
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
  
