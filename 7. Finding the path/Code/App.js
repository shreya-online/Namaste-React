import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header';
import BodyComponent from './src/components/BodyComponent';
import Footer from './src/components/Footer';




const AppLayout = () =>{
    return(
        <>
            <Header />
            <BodyComponent />
            <Footer />
        </>
    )}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)