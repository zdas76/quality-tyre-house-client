import { format } from 'date-fns';
import React, { useState } from 'react';
import { QueryClient, useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';
import ProductCheckOut from './ProductCheckOut';


const Products = () => {

    const [addproduct, setAddProduct] = useState(null);

    // console.log(addproduct);

    // const queryClient = new QueryClient()
    const [date, setDate] = useState(new Date());

    const formattedDate = format(date, 'PP');
    
    // console.log(formattedDate);

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
        <div className='my-12'>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    products?.map( product =>
                        <Product
                            key={product._id}
                            product={product}
                            setAddProduct={setAddProduct}
                        ></Product>
                    )
                }

            </div>
            {
                addproduct && <ProductCheckOut
                    addproduct={addproduct}
                    formattedDate={formattedDate}
                    refetch={refetch}
                    setAddProduct={setAddProduct}
                ></ProductCheckOut>
            }

        </div>
    );
};

export default Products;