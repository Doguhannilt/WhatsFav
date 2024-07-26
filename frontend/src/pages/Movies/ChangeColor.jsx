import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { setColor } from '../../redux/api/color/colorSlice';


const ChangeColor = () => {
    const [color, setColorR] = useState('BLUE');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newColor = e.target.value;
        setColorR(newColor);
        dispatch(setColor({ color: newColor }));

    };

    return (
        <div className="mr-4 text-white">
            <select
                id="colors"
                value={color}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="BLUE">BLUE</option>
                <option value="STONE">STONE</option>
                <option value="AMBER">AMBER</option>
                <option value="YELLOW">YELLOW</option>
                <option value="INDIGO">INDIGO</option>
            </select>
        </div>
    );
};

export default ChangeColor;
