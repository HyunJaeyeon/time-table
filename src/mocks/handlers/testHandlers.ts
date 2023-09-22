import { rest, RequestHandler } from 'msw';

const MOCK_SERVER_URL = 'http://localhost:8080';

const testHandlers: RequestHandler[] = [
  rest.get(`${MOCK_SERVER_URL}/test`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'msw test succeed',
      }),
    );
  }),
];

export default testHandlers;
