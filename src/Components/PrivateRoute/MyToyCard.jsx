import React from 'react'

const MyToyCard = ({ data }) => {
    const { productName, img, price, quantity, rating, description, category, name, email } = data
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
                                        <div className="text-sm opacity-50">{price}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Category:{category}</p>
                                <br />
                                <span className="badge badge-ghost badge-sm">Rating : {rating}</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
    )
}

export default MyToyCard