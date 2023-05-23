import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const AllToysCard = ({data}) => {
    const {user} = useContext(AuthContext)
    const {_id, productName, img, price, quantity, rating, description, category, name, email} = data 
  return (
    <div>
        <div className="card md:w-96 w-full m-0 bg-gray-300 shadow-xl my-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="product img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>Price : ${price}</p>
                    <p>Ratings:{rating}</p>
                    <p>Available Product : {quantity}</p>
                    <p>Seller Email : {email}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AllToysCard