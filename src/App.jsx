import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import Blogs from "./pages/blogs";
import MainLayout from "./layout/mainlayout";
import Services from "./pages/services";
import Products from "./pages/products";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
