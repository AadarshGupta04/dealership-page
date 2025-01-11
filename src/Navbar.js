import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className='bg-dark text-center text-white' >
                <div className='p-2'>Proudly Powered by <img src='\media\images\tractorgyan-whitelogo 1.png'></img></div>
            </div>
            <nav class="navbar navbar-expand-lg text-white navbar-dark" style={{ backgroundColor: "#006633" }}>
                <div class="container-fluid">
                    <a class="navbar-brand ms-5" href="#">
                        <h2>Shree Ji Motors</h2>
                        <h6 className='fs-6'>Gwalior, Madhya Pradesh</h6>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active fw-medium me-5" aria-current="page" href="#">Home</a>
                            <a class="nav-link active fw-medium me-5" href="#">Tractors</a>
                            <a class="nav-link active fw-medium me-5" href="#">About</a>
                            <a class="nav-link active fw-medium me-5" href="#">Events & Offers</a>
                            <a class="nav-link active fw-medium me-5" href="#">Old Tractors</a>
                            <a class="nav-link active fw-medium me-5 " href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
