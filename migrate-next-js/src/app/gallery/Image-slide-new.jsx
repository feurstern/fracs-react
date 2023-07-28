import React, { useState } from 'react'
import { image } from './modal/image-data.js'
const Imageslidenew = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + image.length) % image.length
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    };



    return (
        <div className='relative'>
            <img
                src={image[currentImageIndex].src}
                alt={image[currentImageIndex].description}
                className='w-full h-auto'
            />
            <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
            >
                Previous
            </button>
            <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
            >
                Next
            </button>
        </div>
    )
}

export default Imageslidenew