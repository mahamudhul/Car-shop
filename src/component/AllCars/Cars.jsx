import React from 'react';
import { Link } from 'react-router-dom';

const Cars = ({ cars }) => {
    const { id, brand, model, img, description, price } = cars;


    return (
        <div>
            <div className='border border-gray-300 rounded-xl p-3 h-full'>
                <img className='hover:scale-110 duration-200' src={img} alt="" />
                <div className='pl-2 pt-2'>
                    <p className='text-xl font-bold text mt-2'>{brand}</p>
                    <p>Model: {model}</p>
                    <p>Price: <span className='font-bold'>{price}</span></p>
                </div>
                <button className='mt-5 mb-2'><Link to={`/${id}`} className='  border px-4 py-2 rounded-2xl'>view details</Link></button>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Cars;