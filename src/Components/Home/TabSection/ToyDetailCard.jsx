import React from 'react'
import { Link } from 'react-router-dom'

const ToyDetailCard = ({ data }) => {
    const {_id, name, img, price, quantity, rating, description } = data
    return (
        <div>
            <div className="card md:w-96 w-full md:m-2 m-0 mb-10 bg-gray-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <p>Ratings:{rating}</p>
                    <p>Available Product : {quantity}</p>
                    <div className="card-actions">
                        <Link to={`/viewdetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToyDetailCard