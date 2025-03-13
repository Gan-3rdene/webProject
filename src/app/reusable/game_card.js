import React from 'react';
import '../../styles/scrollbar.css';

const Card = ({image, title, tags, description}) => {
    return (
        <div className='w-2/12 min-h-[92px] h-92 space-y-1'>
            <img src={image} className='h-36 w-full object-cover'></img>
            <div className='text-sm'>{title}</div>
            <div className='text-sm'>{tags}</div>
            <div className='text-sm h-24 overflow-y-auto no-scrollbar'>{description}</div>
        </div>
    )
}

export default Card;