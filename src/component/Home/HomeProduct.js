import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const HomeProduct = () => {
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

    return (
        <div className='my-12 border border-2 py-5'>
            <h1 className='text-5xl font-bold my-6'>Our Quality Products</h1>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12'>
                {
                    products.slice(0, 3).map(product =>
                        <div
                            key={product._id}
                            className=''>
                            <div className="card lg:max-w-lg text-justify pt-3 bg-base-100 shadow-xl mx-auto">
                                <figure><img className='h-96' src={product.image} alt="Tyre" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.name}
                                    </h2>
                                    <p>Description : {product.description}</p>
                                    <p>Price : {product.price}</p>
                                    <p>Quantity : {product.quantity}</p>

                                </div>
                            </div>

                        </div>

                    )

                }
            </div>

            <div className='mt-12'>
                <Link to="products"><button className="btn btn-wide text-xl">Click Here to Book </button></Link>
            </div>

           
        </div>
    );
};

export default HomeProduct;