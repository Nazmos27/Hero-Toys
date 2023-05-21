import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider'

const UpdateToys = ({ closeModal }) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="modal-title">Update Product's Info</h2>
                        <div className="modal-body">
                            {/* this is input field part */}
                            <form >
                                <div className="card md:grid md:grid-cols-2 gap-4 w-full  shadow-2xl bg-base-100">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name='img' placeholder="image url" className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" name='productName' placeholder="Name" required className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='sellerName' placeholder="Your name" required defaultValue={user?.displayName} className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" name='sellerEmail' placeholder="Your email" defaultValue={user?.email} className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name='category' placeholder="(eg:marvel,dc,star_wars etc...)" required className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' placeholder="$" required className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name='rating' placeholder="(out of 5)" className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name='quantity' required className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control col-span-2">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" name='description' placeholder="(eg:material used for it,description of the character)" className="input input-bordered italic" />
                                    </div>
                                    <input type="submit" value="Add Your Toy" className='btn btn-primary col-span-2' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-danger btn-sm' onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateToys