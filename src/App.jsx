import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from "react-router-dom";
import About from './components/about';
import Root from './components/root';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Root/>}>
      <Route index element={<Hero/>}/> 
      <Route path = "/about" element={<About/>}/> 
      <Route path = "/projects" element={<Projects/>}/> 
      <Route path = "/contact" element={<Contact/>}/> 
      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router}/> 
     <Footer/>
    </>
  )
}

export default App
