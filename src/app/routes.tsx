import { createBrowserRouter, Outlet } from "react-router";
import Landing from "./Landing";
import LeaseTerms from "./components/LeaseTerms";
import PropertyInfo from "./components/PropertyInfo";
import NotFound from "./components/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "lease-terms", Component: LeaseTerms },
      { path: "property-info", Component: PropertyInfo },
      { path: "*", Component: NotFound },
    ],
  },
]);
