import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route index element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
