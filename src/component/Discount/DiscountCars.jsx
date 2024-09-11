import React from 'react';

const DiscountCars = ({ discount }) => {
    const { id, brand, model, img, description, price, offer } = discount;

    return (
        <div>
            <div className=' border border-gray-300 rounded-xl p-3 h-full'>
                <div className=''>
                    {/* relative hover:scale-110 duration-200 */}
                    <p className='absolute text-xl bg-rose-700 p-3 text-white w-fit rounded-xl'>{offer}</p>
                    <img className='' src={img} alt="" />
                </div>
                <div className='pl-2 pt-2'>
                    <p className='text-xl font-bold text mt-2'>{brand}</p>
                    <p>Model: {model}</p>
                    <p>Price: <span className='font-bold'>{price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DiscountCars;