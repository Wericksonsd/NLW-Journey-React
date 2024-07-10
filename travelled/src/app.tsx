import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { SelectTrip } from "./pages/selectTrip";
import {Events} from './pages/events'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectTrip />,
  },
  {
    path: "/eventos",
    element: <Events/>
  }
]);

export function App() {
      return <RouterProvider router={router} />     
}

