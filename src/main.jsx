import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello in the home page</div>,
  },
  {
    path: '/about',
    element: <div>I am in the about page</div>
  },
  {
    path: '/contacts',
    element: <div>Now I am in the contact page</div>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
