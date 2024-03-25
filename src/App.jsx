import Home from "./pages/Home";
import About from "./pages/About";
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/root/RootLayout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
