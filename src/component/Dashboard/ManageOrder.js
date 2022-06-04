import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageOrder = () => {

    const [bookproducts, setBookProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://boiling-retreat-14854.herokuapp.com/bookproduct')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookProducts(data)
            });
    }, []);

    

    return (
        <div>
            <h1 className='text-3xl font-bold my-12 text-green-900'>Manage Order</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Booking Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            bookproducts.map((product, index) =>
                                <tr key={product._id}>
                                    <th>{index +1 }</th>
                                    <td>{product.username }</td>
                                    <td>{product.productname }</td>
                                    <td>{product.date }</td>
                                    <td>{product.quantity }</td>
                                    <td>{product.totalPrice }</td>
                                    <td><button class="btn btn-ghost">Delete Order</button></td>
                            </tr>
)
                        }                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;