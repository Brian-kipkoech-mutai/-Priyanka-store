import DetailSection from "@/components/DetailSection";
import { Featured, Latest } from "@/components/featured";
import Review from "@/components/Review";
import Home from "@/Pages/home";
import Listing from "@/Pages/listing";
import Product from "@/Pages/Product";
import Root from "@/Pages/Roots";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
function RoutesConfig() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            { path: "", element: <Featured /> },
            { path: "latest", element: <Latest /> },
            { path: "featured", element: <Featured /> },
          ],
        },
        {
          path: "product/details",
          element: <Product />,
          children: [
            {
              path: "",
              element: <Review />,
            },
            {
              path: "reviews",
              element: <Review />,
            },
            {
              path: "details",
              element: <DetailSection />,
            },
          ],
        },
        {
          path: '/search',
          element:<Listing/>
        },
        { path: "*", element: <div>Not Found</div> },
      ],
    },
  ]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(routes, { key: useLocation().pathname })}
    </AnimatePresence>
  );
}

export default RoutesConfig;
