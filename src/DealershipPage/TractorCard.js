import React from 'react'

export default function TractorCard({ title, image, specs }) {
    return (
        <div className="tractor-card card shadow-sm rounded-4" style={{ width: "22rem" }}>
            {/* Card Header: Title and Subtitle */}
            <div className="card-body text-center">
                <h5 className="card-title mb-1">{title}</h5>
                {/* Buttons */}
                <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-outline-success btn-sm fw-medium fs-6 rounded-4">
                        View Details <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <button className="btn btn-success btn-sm px-4 fw-medium fs-6 rounded-4">Book Now</button>
                </div>
            </div>
            {/* Image */}
            <img src={image} className="card-img-bottom" alt={title} />
            {/* Specifications */}
            <div className="card-body spec-card border-top pt-2 m-3 rounded-4">
                <div className="d-flex justify-content-evenly text-center">
                    <div className="spec spec-1">
                        <span className="d-block text-muted">HP</span>
                        <strong>{specs.hp}</strong>
                    </div>
                    <div className="spec spec-2 text-center">
                        <span className="d-block text-muted">Cylinder</span>
                        <strong>{specs.cylinder}</strong>
                    </div>
                    <div className="spec spec-3 text-center">
                        <span className="d-block text-muted">Lifting Capacity</span>
                        <strong>{specs.capacity}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
