import {IoIosSwitch} from "react-icons/io"
import React from 'react';
import { useState } from "react";

export const ToggleSwitch = () => {

    const [toggleState, settoggleState] = useState(false);

    const handleButtonClick = () => {
        settoggleState(!toggleState)
    };

    const isOn = toggleState === true;

    return (
        <>
        
        <h1>Toggle Switch <IoIosSwitch className="text-fuchsia-500"/></h1>
        <div
            onClick={handleButtonClick}
            className={`
                w-24 h-12 rounded-full p-1 flex items-center transition-all duration-300
                ${isOn ? 'bg-green-600 cursor-pointer' : 'bg-gray-500 cursor-pointer'}
                `}
                >
            <div
                className={`
                    w-10 h-10 rounded-full transition-all duration-300 ease-in-out
                    transform ${isOn ? 'translate-x-12' : 'translate-x-0'}
                    ${isOn ? 'bg-green-600 border-2 border-white' : 'bg-red-500'}
                    `}
                    >
                <span className="ml-2 mb-2 text-white font-semibold text-sm">
                {toggleState}
            </span>
            </div>
            
        </div>
                </>
    );
};
