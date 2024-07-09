import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SelectTrip } from "./pages/selectTrip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectTrip />,
  },
]);

export function App() {
      return <RouterProvider router={router} />     
}

