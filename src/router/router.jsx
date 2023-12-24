import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import ContactMe from "../components/ContactMe/ContactMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/projects",
                element: <Projects></Projects>,
            },
            {
                path: "/skills",
                element: <Skills></Skills>,
            },
            {
                path: "/contactMe",
                element: <ContactMe></ContactMe>,
            },
        ],
    },

]);

export default router;