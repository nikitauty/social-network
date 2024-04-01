import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes';

export const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
