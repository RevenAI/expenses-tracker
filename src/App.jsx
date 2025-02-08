import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/app/Layout";
import Expenses from "./pages/Expenses";
import Trips from "./pages/Trips";
import Approval from "./pages/Approval";
import Settings from "./pages/Settings";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import Support from "./pages/Support";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "expenses", element: <Expenses /> },
      { path: "trips", element: <Trips /> },
      { path: "approval", element: <Approval /> },
      { path: "settings", element: <Settings /> },
      { path: "support", element: <Support /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <>
  <Header />
  <RouterProvider router={router} />
  <Footer />
  </>;
}

export default App

