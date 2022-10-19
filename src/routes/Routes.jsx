import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Book from "../components/Book";
import BookDetails from "../components/BookDetails";
import ErrorPage from "../components/ErrorPage";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Main from "../layout/Main";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/footer',
            element: <Footer></Footer>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/book',
            loader: () => {
                return fetch('data.json')
            },
            element: <Book></Book>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/profile',
            element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
            path: '/wallet',
            element: <PrivetRoute><Wallet></Wallet></PrivetRoute>
        },
        {
            path: 'about',
            element: <About></About>
        }
    ]
}])

export default router;