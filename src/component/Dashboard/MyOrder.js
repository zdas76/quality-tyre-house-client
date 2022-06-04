import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
    const [bookproducts, setBookproducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://boiling-retreat-14854.herokuapp.com/bookproduct?useremail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setBookproducts(data);
                });
        }
} ,[user])


    return (
        <div className='my-12'>
            <h1 className='text-3xl font-bold my-6'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                           <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookproducts.map((bproduct, index) =>
                                <tr key={index}>
                                    <th>{ index + 1}</th>
                                    <td>{bproduct.productname }</td>
                                    <td>{bproduct.quantity}</td>
                                    <td>{bproduct.totalPrice}</td>
                                    <td>
                                        {(bproduct.totalPrice && !bproduct.paid) && <Link to={`/dashboard/payment/${bproduct._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                        
                                        {(bproduct.totalPrice && bproduct.paid) && <div>
                                            <p><span className='text-[green] font-bold'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{bproduct.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>

                            )
                        }
                        

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrder;