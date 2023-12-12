import FirstPage from '@pages/FirstPage';
import FourthPage from '@pages/FourthPage';
import SavePage from '@pages/SavePage';
import SecondPage from '@pages/SecondPage';
import ThirdPage from '@pages/ThirdPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <FirstPage />,
      },
      {
        path: 'credit',
        element: <SecondPage />,
      },
      {
        path: 'subject',
        element: <ThirdPage />,
      },
      {
        path: 'no-time',
        element: <FourthPage />,
      },
    ],
  },
  {
    path: 'time-table',
    element: <SavePage />,
  },
]);

export default router;
