import React from 'react';
import pickup from '../../../assets/pickup.png'
import clock from '../../../assets/clock.png'
import gift from '../../../assets/gift.png'
import card from '../../../assets/atm-card.png'

const Service = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center text-2xl font-bold mt-5 mb-2'>
                We Provided
            </h1>
            <hr className="border-black border-2 w-80 mx-auto" />

            <div className='md:grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-7'>
                <div className='text-center'>
                    <img className='w-16 mx-auto' src={pickup} alt="" />
                    <p className='text-xl font-bold mt-3 my-2'>FREE shipping</p>
                    <p className='text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>

                <div className='text-center'>
                    <img className='w-16 mx-auto' src={clock} alt="" />
                    <p className='text-xl font-bold mt-3 my-2'>24 * 7 SERVICE</p>
                    <p className='text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>

                <div className='text-center'>
                    <img className='w-16 mx-auto' src={gift} alt="" />
                    <p className='text-xl font-bold mt-3 my-2'>SPECIAL GIFT</p>
                    <p className='text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>

                <div className='text-center'>
                    <img className='w-16 mx-auto' src={card} alt="" />
                    <p className='text-xl font-bold mt-3 my-2'>PAYMENT</p>
                    <p className='text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Service;