import { RouteObject } from 'react-router-dom';
import { Chats } from '@/pages/Chats/Chats';
import { RootLayout } from '@/components/RootLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'chats',
        index: true,
        element: <Chats />,
      },
    ],
  },
];
