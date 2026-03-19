import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisiPricing from '../DaisiPricing/DaisiPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8 p-4'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }

                {
                    pricingData.map(pricing => <DaisiPricing key={pricing.id} pricing={pricing}></DaisiPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;