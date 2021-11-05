import React from 'react'

import { SponsorItems } from './SponsorItems';

import './style/style.scss';


const FooterSponsors = () => {
    return (
        <div>
            <div className="footer-sponsor-main-container">
                <div className="footer-sponsor-container-heading">
                    <h2 className='title'>Partners</h2>
                    <div className="underline"></div>
                </div>
                <div className="footer-sponsor-container">
                    <ul>
                    {SponsorItems.map((item, index) => {
                        return (
                        <li key={index} >
                            <img src={item.image} alt="" />
                        </li>
                        );
                    })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterSponsors
