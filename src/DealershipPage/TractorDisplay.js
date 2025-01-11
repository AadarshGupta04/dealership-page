import React from 'react'
import TractorCard from './TractorCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';

export default function TractorDisplay() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [showAllCards, setShowAllCards] = useState(false);

    // Handle screen resizing
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // React-Slick settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,         // Show arrows for navigation
        centerMode: true,     // Center the active item
        centerPadding: "1%",
        focusOnSelect: true
    };

    // Cards Data
    const cardData = [
        {
            id: 1,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 2,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 3,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 4,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 5,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 6,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 7,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 8,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
        {
            id: 9,
            title: "Massey Ferguson 6026 MaxPro Wide Track Tractors",
            image: "/media/images/tractor-porsche-5408352_1280.png",
            specs: { hp: 47, cylinder: 3, capacity: "2000Kg" },
        },
    ];


    return (
        <div className="container mt-4">

            {/* Small Screen: Display all cards when View All is clicked */}
            {isSmallScreen && showAllCards ? (
                <div className="tractor-div">
                    {cardData.map((card) => (
                        <TractorCard
                            key={card.id}
                            title={card.title}
                            image={card.image}
                            specs={card.specs}
                        />
                    ))}
                </div>
            ) : isSmallScreen ? (
                // Display carousel on small screens
                <Slider {...sliderSettings}>
                    {cardData.map((card) => (
                        <TractorCard
                            key={card.id}
                            title={card.title}
                            image={card.image}
                            specs={card.specs}
                        />
                    ))}
                </Slider>
            ) : (
                // Display static grid layout on larger screens
                <div className="tractor-div">
                    {cardData.map((card) => (
                        <TractorCard
                            key={card.id}
                            title={card.title}
                            image={card.image}
                            specs={card.specs}
                        />
                    ))}
                </div>
            )}

            {/* Small Screen: View All and Show Less Button */}
            {isSmallScreen && (
                <div className="text-center mb-4">
                    {!showAllCards ? (
                        <button
                            className="btn btn-success btn-md fw-bold rounded-4 px-4 mt-5"
                            onClick={() => setShowAllCards(true)} // Show all cards on click
                        >
                            View All Latest Tractors
                        </button>
                    ) : (
                        <button
                            className="btn btn-secondary btn-md fw-bold rounded-4 px-4 mt-5"
                            onClick={() => setShowAllCards(false)} // Return to carousel view
                        >
                            Show Less
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
