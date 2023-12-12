import { MOCK_API_PATH, MOCK_SERVER_URL } from '@constants/api';
import { rest, RequestHandler } from 'msw';

import MOCK_MAJOR_DB from '../data/mock-subjec-db';

const majorHandlers: RequestHandler[] = [
  rest.get(`${MOCK_SERVER_URL}${MOCK_API_PATH.SUBJECT}`, (req, res, ctx) => {
    const majorQueryString = req.url.searchParams.get('q');
    if (!majorQueryString) {
      return res(ctx.status(200), ctx.json(MOCK_MAJOR_DB));
    }

    const recommentMajorList = MOCK_MAJOR_DB.filter((SubjectItem) =>
      SubjectItem.subject.includes(majorQueryString),
    );
    return res(ctx.status(200), ctx.json(recommentMajorList));
  }),
];

export default majorHandlers;
