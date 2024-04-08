import React from 'react'
import mobileImage from './mobile.jpg';
import cartImage from './Cart.png' // Import the image file
function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src={cartImage} width='100px' height='100px'/>
            </div>
            <h1>This is Home Page</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={mobileImage} width="200px" />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;