import React from 'react'
import ImageCarousel from './ImageCarousel'
import TractorDisplay from './TractorDisplay'

export default function Hero() {
    return (
        <>
            <ImageCarousel></ImageCarousel>
            <div className="follow-div gradient-bg text-center d-flex align-items-center justify-content-center px-4">
                <div className='me-4'>
                    <h4>Follow Shree Ji Motors on Social Media</h4>
                </div>
                <div>
                    <i className="fa-brands fa-facebook me-4 fs-1"></i>
                    <i className="fa-brands fa-linkedin me-4 fs-1"></i>
                    <i className="fa-brands fa-instagram me-4 fs-1"></i>
                    <i className="fa-brands fa-twitter me-4 fs-1"></i>
                    <i className="fa-brands fa-youtube me-4 fs-1"></i>
                </div>
            </div>
        </>
    )
}
