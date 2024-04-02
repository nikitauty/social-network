import { Navigate, RouteObject } from 'react-router-dom';
import { Chats } from '@/pages/Chats/Chats';
import { RootLayout } from '@/components/RootLayout';
import { ErrorPage } from '@/pages/Error';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <ErrorPage
        error={{
          id: 404,
          text: 'Error! Something went wrong. Please restart page',
        }}
      />
    ),
    children: [
      { index: true, element: <Navigate to="/chats" replace /> },
      {
        path: 'chats',
        index: true,
        element: <Chats />,
      },
    ],
  },
];
