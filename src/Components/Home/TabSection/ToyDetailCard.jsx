import React from 'react'

const ToyDetailCard = ({ data }) => {
    const { name, img, price, quantity, rating, description } = data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <p>Ratings:{rating}</p>
                    <p>Available Product : {quantity}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToyDetailCard