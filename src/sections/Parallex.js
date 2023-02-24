import React from 'react'

const Parallex = () => {
    return (
        <>
            <div className='parellex_container' >
                <div className="velaBackgroundParallax bg_parallax bg_image" style={{
                    backgroundImage: "url(//cdn.shopify.com/s/files/1/0535/4812/2292/files/Parallaxbg.jpg?v=1621823035)",
                    backgroundColor: '#ffffff',
                    padding: '50px'

                }}
                >
                    <div className="container">
                        <div className="velaBannerTextInner">
                            <div className="bannerInner text-center">
                                <h3 className="bannerTitle" style={{ color: "#ffffff" }}></h3>
                                <div className="bannerDesc" style={{ color: "#ffffff" }}><div>
                                    <p style={{ fontSize: "32px", paddingTop: "35px" }}>All the products use TENCEL™ Lyocell fiber</p>
                                    <p style={{ fontSize: "16px" }}>TENCEL™ fiber is made by Lenzing, using a closed loop process and is currently the most sustainable one.</p>
                                </div></div>
                                <a className="btn" href="" style={{ color: "rgba(0,0,0,0)", backgroundColor: "rgba(0,0,0,0)" }}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
        </>

    )
}

export default Parallex