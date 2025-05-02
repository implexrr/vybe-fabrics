// routes.tsx

import { createRoutesFromElements, Route } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import About from "../../pages/About"
import Careers from "../../pages/Careers";
import Cart from "../../pages/Cart"
import Contact from "../../pages/Contact";
import ErrorPage from "../../pages/Error";
import Home from "../../pages/Home";
import Products from "../../pages/Products";

const routes = createRoutesFromElements(
  <Route element={<MainLayout />}  path="/">
    <Route element={<Home />} index />
    <Route element={<Products />} path="products" />
    <Route element={<Cart />} path="cart" />
    <Route element={<About />} path="about" />
    <Route element={<Contact />} path="contact" />
    <Route element={<Careers />} path="careers" />
    <Route element={<ErrorPage />} path="*"></Route>
  </Route>
);

export default routes;
