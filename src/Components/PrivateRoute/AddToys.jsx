import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import Swal from 'sweetalert2'

const AddToys = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
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
        const addedToys = {
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
        console.log(addedToys);
        fetch('https://assignment-11-serverside-eight.vercel.app/addToys',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title:'Success!',
                    text:'Product Added Successfully',
                    icon:'success',
                    confirmButtonText:'Cool'
                })
                event.target.reset()
            })
    }



    return (
        <div>
            <h1 className='text-3xl text-center mt-16 mb-10'>Want to add some custom Toys?Here provide Detail info</h1>
            <hr className='w-11/12 mx-auto border-[2px] px-20 my-10'/>
            <form onSubmit={handleSubmit}>
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
    )
}

export default AddToys