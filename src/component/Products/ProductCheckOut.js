import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const ProductCheckOut = ({ addproduct, formattedDate, refetch, setAddProduct }) => {
    const { _id } = addproduct;

    console.log(_id);
    const [user, loading, error] = useAuthState(auth);
    
    // console.log(addproduct, user);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        const bookignQuantity = e.target.quantity.value;
        const price = addproduct.price;
        const totalPrice = bookignQuantity * price;

        const booking = {
            username: user.displayName,
            useremail: user.email,
            productname: addproduct.name,
            date: formattedDate,
            quantity: e.target.quantity.value,
            totalPrice,
        }
        console.log(booking);
        const url = `https://boiling-retreat-14854.herokuapp.com/bookproduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(name => {

                // const quantity = addproduct.quantity- parseInt(e.target.quantity.value);
                
                // const url = `http://localhost:5000/product/${_id}`;
                // fetch(url, {
                //     method: 'PUT',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(quantity)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //     })
                setAddProduct(null);
                refetch();
            })

    };

    
    return (
        
        <div className="my-10 card-body" >
            
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    


                    <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>

                            <input type="name" disabled name="username" value={user.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" disabled name="email" value={user.email || ''} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                                <input type="name" disabled name="productname" value={addproduct.name || ''} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Order Date</span>
                            </label>
                            <input type="text" disabled name="date" value={formattedDate} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Unite Price</span>
                            </label>
                            <input type="number" disabled name="date" value={addproduct.price} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" disabled name="date" value={addproduct.quantity} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Booking Quantity</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },
                                    min: {
                                        value: 100,
                                        message: 'Must be Minimum 100 products'
                                    },
                                    max: {
                                        value: addproduct.quantity,
                                        message: `Must be under the ${addproduct.quantity} products`
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value="Add Product" />
                    </form>
            </div>
            </div>


            

        </div>
    );
};

export default ProductCheckOut;