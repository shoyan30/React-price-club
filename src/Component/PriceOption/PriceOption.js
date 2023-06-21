import React from 'react';

import Feature from '../Feature/Feature';

const PriceOption = (props) => {
    const { price, name, features } = props.option
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3 '>
            <h2>
                <span className='text-6xl text-white'>{price}</span>
                <span className='text-2xl text-white'>/mon</span>
            </h2>
            <h2 className='text-3xl my-4'>{name}</h2>

            <div>
            

            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature = {feature}
                
                ></Feature>)
            }

            <button className='w-full bg-green-400 mt-2 font-bold text-white py-2'>Buy Now</button>
            </div>
        </div>

        
        
    );
};

export default PriceOption;