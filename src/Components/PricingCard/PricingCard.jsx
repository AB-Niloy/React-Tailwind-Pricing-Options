import React from 'react';
import PricingFeature from './PricingFeature';


const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {name, price, duration, description, features} = pricing;
    return (
        <div className='flex flex-col border border-orange-400 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg md:mx-6'>
            {/* Card Header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className="text-3xl">{price}/{duration}</h4>
            </div>
            {/* Card  Body */}
            <div className='bg-orange-500/10 border border-orange-400/30 p-4 rounded-xl mt-8 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 border-none text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300"> Subscribe</button>
        </div>
    );
};

export default PricingCard;