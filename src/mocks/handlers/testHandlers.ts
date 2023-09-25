import { MOCK_SERVER_URL } from '@constants/api';
import { rest, RequestHandler } from 'msw';

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
