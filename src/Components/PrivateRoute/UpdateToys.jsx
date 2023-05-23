import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom'
import useTitle from '../../CustomHooks/useTitle'

const UpdateToys = () => {
    const {user} = useContext(AuthContext)
    useTitle("Update toys")
    const productData = useLoaderData()
    console.log(productData);
    const {_id,productName,img,price,rating,description,category,quantity} = productData


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target
        const productName = form.productName.value
        const email = form.sellerEmail.value
        const img = form.img.value
        const name = form.sellerName.value
        const category = form.category.value
        const description = form.description.value
        const quantity = form.quantity.value
        const price = form.price.value
        const rating = form.rating.value
        const updatedToys = {
            productName,
            email,
            img,
            name,
            category,
            description,
            quantity,
            price,
            rating

        }
        fetch(`https://assignment-11-serverside-eight.vercel.app/addToys/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title:'Success!',
                        text:'Product Updated Successfully',
                        icon:'success',
                        confirmButtonText:'Cool'
                    })
                }
            })
    }
    

    




    return (
        <div>
            <form onSubmit={handleUpdate}>
                                <div className="card md:grid md:grid-cols-2 gap-4 w-full  shadow-2xl bg-base-100">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" defaultValue={img} name='img' placeholder="image url" className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" defaultValue={productName} name='productName' placeholder="Name" required className="input input-bordered italic" />
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
                                        <input type="text" name='category' placeholder="(eg:marvel,dc,star_wars etc...)" defaultValue={category} className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" defaultValue={price} name='price' placeholder="$"  className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" defaultValue={rating} name='rating' placeholder="(out of 5)" className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" defaultValue={quantity} name='quantity' required className="input input-bordered italic" />
                                    </div>
                                    <div className="form-control col-span-2">
                                        <label className="label">
                                            <span className="label-text">Short Description</span>
                                        </label>
                                        <input type="text" defaultValue={description} name='description' placeholder="(eg:material used for it,description of the character)" className="input input-bordered italic" />
                                    </div>
                                    <input type="submit" value="Update Information" className='btn btn-primary col-span-2' />
                                </div>
                            </form>
        </div>
    )
}

export default UpdateToys