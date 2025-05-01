import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import NotFound from "./components/NotFound.jsx";
import ProductList from "./components/ProductList.jsx";
import Clothing from "./components/Clothing.jsx";
import Electronics from "./components/Electronics.jsx";
import Furniture from "./components/Furniture.jsx";
import Toys from "./components/Toys.jsx";
import { Suspense } from "react";
import Spinner from "./components/Spinner.jsx";
import shopStore from "./utils/shopStore.js";
import AllProducts from "./components/AllProducts.jsx";

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <ProductList />,
        children: [
          {
            index: true,
            element: (<Suspense fallback={<Spinner/>}>
              <AllProducts/>
            </Suspense>),
          },
          {
            path: "clothing",
            element: (
              <Suspense fallback={<Spinner />}>
                <Clothing />
              </Suspense>
            ),
          },
          {
            path: "electronics",
            element: (
              <Suspense fallback={<Spinner />}>
                <Electronics />
              </Suspense>
            ),
          },
          {
            path: "furniture",
            element: (
              <Suspense fallback={<Spinner />}>
                <Furniture />
              </Suspense>
            ),
          },
          {
            path: "toys",
            element: (
              <Suspense fallback={<Spinner />}>
                <Toys />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={shopStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
