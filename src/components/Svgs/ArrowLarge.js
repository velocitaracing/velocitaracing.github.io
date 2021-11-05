import React from 'react'

const ArrowLarge = () => {
    return (
        <div>
           <svg className='arrow-large' width="115" height="112" viewBox="0 0 115 112">
                <defs>
                    <filter id="Path_123" x="-1.73" y="-0.192" width="119.563" height="118.172" filterUnits="userSpaceOnUse">
                    <feOffset dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feFlood floodOpacity="0.161"/>
                    <feComposite operator="in" in2="blur"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                    <clipPath id="clip-arrow">
                    <rect width="115" height="112"/>
                    </clipPath>
                </defs>
                <g id="arrow" clipPath="url(#clip-arrow)">
                    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_123)">
                    <path id="Path_123-2" data-name="Path 123" d="M6337.27,955.808v50.086l50.086,50.086,51.477-50.086V955.808l-51.477,50.086Z" transform="translate(-6330 -950)" fill="#f80"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default ArrowLarge
