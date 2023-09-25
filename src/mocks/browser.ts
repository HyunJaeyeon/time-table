import { setupWorker } from 'msw';

import { majorHandlers, testHandlers } from './handlers';

const worker = setupWorker(...testHandlers, ...majorHandlers);

export default worker;
