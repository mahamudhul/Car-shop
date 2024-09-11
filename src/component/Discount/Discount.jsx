import React, { useEffect, useState } from 'react';
import DiscountCars from './DiscountCars';

const Discount = ({ carsData }) => {

    const discountData = carsData.slice(0, 3);
    // console.log(discountData)

    return (
        <div>
            <div className='pl-5'>
                    <h1 className=' font-bold font-serif mt-5 mb-1 title'>Month of the deal</h1>
                    <p className="text-sm text-gray-700 mb-5">Don't wait. The time will never be just right.</p>
                </div>
            {/* <div className="flex justify-between items-center m-5">
                
                <div>
                    
                </div>
            </div> */}
            <div className='grid grid-cols-3 gap-3'>
                {
                    discountData.map((discount, idx) => <DiscountCars
                        key={idx}
                        discount={discount}
                    ></DiscountCars>)
                }
            </div>
        </div>
    );
};

export default Discount;