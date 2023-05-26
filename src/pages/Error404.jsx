import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Error404 = () => {
    return (
        <>
            <Header title="Error 404"/>
            <div className="flex justify-center  bg-green-800 w-screen h-screen">
                <p>Error 404</p>
            </div>
            <Footer/>
        </>
    );
};

export default Error404;
