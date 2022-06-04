import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';import CheckoutForm from './CheckoutForm';
;

const stripePromise = loadStripe('pk_test_51L4HONAOwHCeYj19GXKsGBuEmwoguWG2Kb1byy3XAeyRHn5v8ofzdW2pXNpBULKHHe0cKnMQDe9Hagb9wleZwANF00bMh7h2Q1');

const Payment = () => {
    const { id } = useParams();

    const url = `https://boiling-retreat-14854.herokuapp.com/bookproduct/${id}`;

    const { data: bookproduct, isLoading } = useQuery(['bookproduct', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    
    if (isLoading){
        return <Loading></Loading>
    }
    
    
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="flex-col">
                    <div class="card  max-w-md bg-base-100 shadow-xl my-10">
                        <div class="card-body">
                            <h2 class="card-title">Pay for {bookproduct.productname} </h2>
                            <p></p>
                            <div class="card-actions text-2xl justify-center">
                                Total Amount BDT. <strong>{bookproduct.totalPrice}</strong>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    bookproduct={bookproduct}
                                />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;