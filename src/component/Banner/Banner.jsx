import { Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <div className='p-5'>
            {/* className='p-5 md:mx-20' */}
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                <Carousel slideInterval={5000}>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
            </div>
            <hr className="border-black border-2 w-80 mx-auto mt-10" />

            <div className='flex justify-center gap-10 mt-10'>
                <p className='text-xl font-bold'>LAMBORGINI</p>
                <p className='text-xl font-bold'>BMW</p>
                <p className='text-xl font-bold'>PORCHE</p>
                <p className='text-xl font-bold'>BUGATI</p>
                <p className='text-xl font-bold'>ROLLS-ROYEL</p>

            </div>
        </div>
    );
};

export default Banner;