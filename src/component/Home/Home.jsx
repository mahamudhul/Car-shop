import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Service from './Service/Service';
import AllCars from '../AllCars/AllCars';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import Discount from '../Discount/Discount';

const Home = () => {
    const carsData = useLoaderData();
    // console.log(carsData.length);


    return (
        <div>

            <Banner></Banner>
            <Discount carsData={carsData}></Discount>
            <Catagory></Catagory>
            <AllCars carsData={carsData}></AllCars>
            <Service></Service>

        </div>
    );
};

export default Home;