import { RouteProps } from 'react-router-dom';
import { AppRoutes, getRouteMain, getRoutePosts } from './router';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <div></div>,
  },
  [AppRoutes.POSTS]: {
    path: getRoutePosts(),
    element: <div></div>,
  },

  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <div></div>,
  },
};
