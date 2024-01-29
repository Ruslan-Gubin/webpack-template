import { createRoot } from 'react-dom/client';
import { App } from './componenst/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPage, ShopPage } from '@/pages';
import { Suspense } from 'react';

const root = document.getElementById('root');
if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <AboutPage/>
      },
      {
        path: '/shop',
        element: <ShopPage/>
      },
    ]
  },
])

container.render(
  <Suspense>
<RouterProvider router={router} />
  </Suspense>
)
