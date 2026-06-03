import { createBrowserRouter } from "react-router-dom";
import {
    AccessibilityPage,
    CssPage,
    ErrorPage,
    HomePage,
    HtmlPage,
    JsPage,
    ScorePage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/css-quiz",
    element: <CssPage />,
  },
  {
    path: "/html-quiz",
    element: <HtmlPage />,
  },
  {
    path: "/javascript-quiz",
    element: <JsPage />,
  },
  {
    path: "/accessibility-quiz",
    element: <AccessibilityPage />,
  },
  {
    path: "/score",
    element: <ScorePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
