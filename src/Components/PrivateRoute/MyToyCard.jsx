import React from 'react'

const MyToyCard = ({ data , handleDelete, openModal }) => {
    const {_id, productName, img, price, quantity, rating, description, category, name, email } = data
    

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Product's Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">Price : ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>Category:{category}</p>
                <br />
                <span className="badge badge-ghost badge-sm">Rating : {rating}</span>
            </td>
            <td>Available Products : {quantity}</td>
            <th>
                <button onClick={openModal} className="btn btn-danger btn-sm">Update</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    )
}

export default MyToyCard