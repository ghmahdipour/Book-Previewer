import React,{ Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "@components/Loading";

const Landing = React.lazy(() => import("@pages/landing"));

const Book = React.lazy(() => import("@pages/book"));

function App() {

    const Routes =  createBrowserRouter(
      [
        {
          path: "/",
          element: 
            <Suspense fallback={<Loading />}>
              <Landing />
            </Suspense>
        },
        {
          path: "/books/:bookId",
          element: 
          <Suspense fallback={<Loading />}>
            <Book />
          </Suspense>
        },
      ]
    )

  return (
    <div className="content-page">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
