"use client";
import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return(
        <button onClick={handleClick} className= "flex flex-col justify-center items-start border border-black-500">
            <span className={`bg-gray-500 block transition-all duration-300 ease-out h-7.5 w-30 rounded-sm`} >
                Browse Games
            </span>
            <span className={`bg-gray-500 block transition-all duration-300 ease-out h-7.5 w-30 rounded-sm`} >
                My Library
            </span>
            <span className={`bg-gray-500 block transition-all duration-300 ease-out h-7.5 w-30 rounded-sm`} >
                Upload Games
            </span>
            <span className={`bg-gray-500 block transition-all duration-300 ease-out h-7.5 w-30 rounded-sm`} >
                Learn HTML/Java
            </span>
        </button>
    )
};

export default BurgerMenu;