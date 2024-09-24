import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import BookingsPage from "./pages/BookingsPage";
import EventsPage from "./pages/EventsPage";
import ProductPanel from "./components/ProductPanel";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products",
        element: <ProductPage />,
        children: [
          {
            path: "/products/:category",
            element: <ProductPanel />,
          },
        ],
      },
      { path: "/services", element: <ServicePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/bookings", element: <BookingsPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
