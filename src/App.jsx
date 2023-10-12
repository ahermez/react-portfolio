import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/about";
import Root from "./components/root";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
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
