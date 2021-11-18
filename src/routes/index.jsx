import { lazy, memo } from 'react';

const Home = lazy(() => import('../components/Home'));

const routes = {
  Home: {
    path: `/`,
    component: newHome,
  },
}

export default routes
