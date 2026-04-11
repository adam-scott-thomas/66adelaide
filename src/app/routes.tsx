import { createBrowserRouter } from "react-router";
import Landing from "./Landing";
import LeaseTerms from "./components/LeaseTerms";
import PropertyInfo from "./components/PropertyInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/lease-terms",
    Component: LeaseTerms,
  },
  {
    path: "/property-info",
    Component: PropertyInfo,
  },
]);
