import { Component } from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const publicRoutes= [
    { path: "/", Component: HomePage },
    { path: "/login", Component: LoginPage},
    {path: "/product", Component: ProductPage},
    {path: "/about", Component: AboutPage},
    {path: "/contact", Component: ContactPage},
    {path: "/productdetail", Component: ProductDetailPage},
];
export {publicRoutes};