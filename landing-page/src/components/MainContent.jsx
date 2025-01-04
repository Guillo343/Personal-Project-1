import React from 'react'
import '../assets/MainContent.css'

export const MainContent = () => {
  return (
    <div className='main-content'>
        <div className="text-content">
            <h1>Brand</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam possimus impedit a quos! Modi nobis delectus, totam vero nesciunt fugiat quidem iste corporis laudantium temporibus? Accusantium qui ratione dicta!</p>
            <p className="price">$41.50</p>
            <div className="size-options">
                <button>Small</button>
                <button>Medium</button>
                <button>Large</button>
            </div>
            <button add-to-cart>Add To Cart</button>
        </div>
        <div className="image-content">
            <div className="product-image">
                <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Brand" />
                <div className="floating-lid"></div>
            </div>
        </div>
    </div>
  )
}
