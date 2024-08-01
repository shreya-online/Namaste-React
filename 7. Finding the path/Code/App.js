import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './src/components/Header';
import BodyComponent from './src/components/BodyComponent';
import Footer from './src/components/Footer';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import Error from './src/components/Error';
import Cart from './src/components/Cart';
import RestaurantMenu from './src/components/RestaurantMenu';


const AppLayout = () =>{
    return(
        <>
            <Header />
            {/* An <Outlet> should be used in parent route elements to render their child route elements. 
            This allows nested UI to show up when child routes are rendered. 
            If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
            <Outlet />
            <Footer />
        </>
    )}

const appRouter = createBrowserRouter([
    {
        // parent  route
        path: "/",
        element: <AppLayout/>,
        // child route
        children:[
            {
                path:"/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "/cart",
                element: <Cart />
            },
            //:resId denotes dynamic id
            {
                path:'/restaurant/:resId',
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)