import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './src/components/Header';
import BodyComponent from './src/components/BodyComponent';
import Footer from './src/components/Footer';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import Error from './src/components/Error';


const AppLayout = () =>{
    return(
        <>
            <Header />
            <BodyComponent />
            <Footer />
        </>
    )}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <ContactUs />,
    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)