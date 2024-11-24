import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import UniversityListPage from "./pages/universityListPage/UniversityListPage";
import WishlistPage from "./pages/wishlistPage/WishlistPage";
import { WishlistProvider } from "./context/WishlistContext";
import "./styles/variables.css";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <UniversityListPage />,
        },
        {
          path: "/wishlist",
          element: <WishlistPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </>
  );
}

export default App;
