import React from 'react';
import { BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex mt-2 items-center'>
            <CheckCircleIcon className="h-6 w-6 pr-2 text-green-500" />
            <h2>{feature}</h2>
            
        </div>

        
    );
};

export default Feature;