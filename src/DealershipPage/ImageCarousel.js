import React from 'react';

const ImageCarousel = () => {
    return (
        <>
            <div className='row mt-4'>
                {/* Image Carousel */}
                <div id="carouselExampleIndicators" class="carousel slide col-11 col-md-5">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="\media\images\showroom.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="\media\images\showroom.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="\media\images\showroom.png" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Right Part -> Welcome & Info */}
                <div className='col-12 col-md-6 mt-4'>
                    {/* Welcome */}
                    <div className='hero-wlcm d-flex'>
                        <div className='hero-logo'>
                            <img src='\media\images\image 80.png'></img>
                        </div>
                        <div className='ms-2 hero-wlcm'>
                            <h3 className='fs-2 fw-bold'>Welcome to Shree Ji Motors
                                <h6 className='text-muted'>Mahindra tractors dealership in Gwalior</h6></h3>
                        </div>
                    </div>

                    {/* Info - Contacts */}
                    <div className='info-detail d-flex materials'>
                        <div className='material-inside material-1'>
                            <div className='mt-4 d-flex'>
                                <img style={{ width: "35px", height: "35px" }} src='\media\images\Vector.png'></img>
                                <h5 className='mt-1 ms-2'>9:30AM-7PM (Mon-Sat)</h5>
                            </div>
                            <div className='mt-4 d-flex'>
                                <img style={{ width: "35px", height: "30px" }} src='\media\images\Vector (1).png'></img>
                                <h5 className='mt-1 ms-2'>shreejimotorsgwalior@gmail.com</h5>
                            </div>
                            <div className='mt-4 d-flex'>
                                <img style={{ width: "35px", height: "30px" }} src='\media\images\noun-telephone-4146480 1.png'></img>
                                <h5 className='mt-1 ms-2'>+91-94******67</h5>
                            </div>
                        </div>
                        <div className='pe-3 mt-4 material-inside material-2'>
                            <div className='d-flex'>
                                <img style={{ width: "35px", height: "35px" }} src='\media\images\Vector (2).png'></img>
                                <h5 className='mt-1 ms-2'>Gwalior, Madhya Pradesh</h5>
                            </div>
                            <div className='d-flex mt-4'>
                                <img style={{ width: "30px", height: "40px" }} src='\media\images\Vector (3).png'></img>
                                <h5 className='mt-1 ms-2'>1/2, Opposite to Hotel Management College, Airport Road, Gwalior (MP) 400100</h5>
                            </div>
                        </div>
                    </div>
                    <button className='mt-3 btn btn-lg btn-success call-btn'>Call Now</button>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default ImageCarousel;
