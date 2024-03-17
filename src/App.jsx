import { BrowserRouter, useRoutes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return routes
};
const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;
