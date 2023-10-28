import { lazy, memo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Top = lazy(async () => ({
  default: (await import('@/pages/Top')).Top
}));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Top />
  }
]);

export const AppRoutes: React.FC = memo(() => {
  return <RouterProvider router={router} />;
});
