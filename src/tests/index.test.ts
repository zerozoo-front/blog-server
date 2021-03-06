import request from 'supertest';
import App from '../app';
import IndexRoute from '../routes/index.route';
import UserRoute from '../routes/user.route';

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});

describe('Testing Index', () => {
  describe('[GET] /', () => {
    it('response statusCode 200', () => {
      const indexRoute = new IndexRoute();
      const app = new App([indexRoute]);

      return request(app.getServer()).get(`${indexRoute.path}`).expect(200);
    });
  });
  describe('[GET] /user', () => {
    it('response statusCode 200', () => {
      const userRoute = new UserRoute();
      const app = new App([userRoute]);

      return request(app.getServer()).get(`${userRoute.path}`).expect(200);
    });
    it('user method add', () => {
      const method = new UserRoute();
      return expect(method.addSomething(1, 1)).toBe(2);
    });
  });
});
