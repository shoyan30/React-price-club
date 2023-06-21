import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name:'Free', price: 0, features: [
            'Free feature',
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Hudai feature',
            'Ajaira feature'
        ]},
        {id: 2, name:'Standard', price: 9.99, features: [
            'Free feature',
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Hudai feature',
            'Ajaira feature'
        ]},
        {id: 3, name:'Premium', price: 19.99, features: [
            'Free feature',
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Hudai feature',
            'Ajaira feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-300 p-12 mt-4 font-bold text-white'>Best Deal of the Town</h2>

            <div className='grid md:grid-cols-3 gap-3'>
            {
                pricingOption.map(option => <PriceOption
                
                    key={option.id}
                    option = {option}

                
                ></PriceOption> )
            }
            </div>
        </div>
    );
};

export default Pricing;