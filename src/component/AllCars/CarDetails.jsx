import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CarDetails = () => {
    // const carDetails = useLoaderData();
    // console.log(cars)
    const { id } = useParams();

    const carDetails = useLoaderData();
    // console.log(carDetails);
    // console.log(id)

    const carData = carDetails.find(blog => blog.id === id);
    console.log(carData)

    const { brand, model, img, description, price } = carData

    return (
        <div className='grid grid-cols-3  items-center gap-10'>
            <div className='col-span-2'>
                <img src={img} alt="" />
            </div>
            <div>
                <p className='text-xl'>Model: <span className='font-bold'>{model}</span></p>
                <p className='text-xl mt-1'>Brand name: <span className='font-bold'>{brand}</span> </p>
                <p className='text-xl mb-3 mt-1'>Price: <span className='font-bold'>{price}</span> </p>

                <hr className='border border-gray-500' />

                <p className='text-gray-700 text-sm my-5'>{description}</p>

                {/* btn */}
                <div>
                    <button className=" border border-slate-500 bg-emerald-300 hover:bg-emerald-800 text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-xl" type="submit">Add To Cart </button>

                    <button className=" border border-slate-500 bg-white hover:bg-slate-600 text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-xl" type="submit">Book Now </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;