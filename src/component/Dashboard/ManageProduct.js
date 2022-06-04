import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageProduct = () => {

    
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://boiling-retreat-14854.herokuapp.com/products`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );

    // console.log(products);

    if (isLoading) {
        return <Loading></Loading>
    }

    const deleteProduct = (id) => {
        console.log(id);
        const proceed = window.confirm('Product Delete?');
        if (proceed) {

            const url = `https://boiling-retreat-14854.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    console.log('delete', id);
                })
        }
    }

    return (
        <div>
 
            <div className="overflow-x-auto my-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Unite Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                 
                    <tbody>
                        {
                            products?.map((product, index) =>
                                <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button onClick={() =>deleteProduct(product._id)} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
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

export default ManageProduct;