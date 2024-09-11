import Cars from "./Cars";

const AllCars = ({ carsData }) => {

    console.log(carsData)

    return (
        <div>
            <div className="p-5 ">
                <div className="flex justify-between items-center m-5">
                    <div>
                        <h1 className=' font-bold font-serif mt-5 mb-1 title'>NEW ARRIVAL CARS</h1>
                        <p className="text-sm text-gray-700">Shop online for new arrivals and get free shipping!</p>
                    </div>
                    <div>
                        <p><button>All</button> / <button>BMW</button> / <button>MERCEDES</button> / <button>DODGE</button></p>
                    </div>
                </div>
                {/* <hr className="border-gray-600 border-2 w-80 mx-auto" /> */}

                <div>
                    <div className="grid grid-cols-3 gap-6 mt-5">
                        {
                            carsData.map((cars, idx) => <Cars
                                key={idx}
                                cars={cars}></Cars>)
                        }

                    </div>
                    <div className="text-center">
                        <button className="p-5 border border-gray-500 rounded-xl">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCars;