import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import HomePage, { loader as productsLoader } from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { action as logoutAction } from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: productsLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      {
        path: "shop",
        element: <ShopPage />,
        loader: productsLoader,
      },
      {
        path: "detail/:productId",
        element: <DetailPage />,
        loader: productsLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
        loader: productsLoader,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
