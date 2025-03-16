import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import Blogs from "./pages/blogs";
import MainLayout from "./layout/mainlayout";
import Services from "./pages/services";
import Products from "./pages/products";
import Home from "./pages/home";
import Details from "./pages/details";
import Basket from "./pages/Basket";
import BlogDetail from "./pages/blogdetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/auth/authContext";
import BasketProvider from "./context/basket/basketProvider";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../scrolltotop";

function App() {
  return (
    <>
      <AuthProvider>
        <BasketProvider>
          <HelmetProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="services" element={<Services />} />
                  <Route path="products" element={<Products />} />
                  <Route path="details/:id" element={<Details />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="blogs/detail/:id" element={<BlogDetail />} />
                  <Route path="basket" element={<Basket />} />
                </Route>
                {/* <Route path="/admin" element={<AdminNav />}>
                  <Route index element={<Admin />} />
                  <Route path="addnew" element={<AdminAdd />} />
                  <Route path="details/:id" element={<AdminDetail />} />
                </Route> */}
                <Route path="*" element={<NotFound />} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>

              <ToastContainer position="top-right" autoClose={3000} />
            </BrowserRouter>
          </HelmetProvider>
        </BasketProvider>
      </AuthProvider>
    </>
  );
}

export default App;
