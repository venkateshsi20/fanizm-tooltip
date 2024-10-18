import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LiveQuiz from "../components/livequiz";

const AppLayout = lazy(() =>
  import(/* webpackChunkName: "AppLayout" */ "../components/applayout")
);
const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/home"));
const View = lazy(() => import(/* webpackChunkName: "home" */ "../pages/view"));

const childRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={"loading..."}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/:id",
    element: (
      <Suspense fallback={"loading..."}>
        <LiveQuiz />
      </Suspense>
    ),
  },
  {
    path: "/view",
    element: (
      <Suspense fallback={"loading..."}>
        <View />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>No Such Route</h1>,
  },
];

const route = [
  {
    path: "/",
    element: (
      <Suspense fallback={"loading..."}>
        <AppLayout />
      </Suspense>
    ),
    children: childRoutes,
    errorElement: <h1>Something went wrong; please refresh the page.</h1>,
  },
];

export const router = createBrowserRouter(route);

const Routes = () => (
  <Suspense fallback={"loading...."}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Routes;
