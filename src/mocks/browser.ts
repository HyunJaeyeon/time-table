import { setupWorker } from 'msw';

import { testHandlers } from './handlers';

const worker = setupWorker(...testHandlers);

export default worker;
