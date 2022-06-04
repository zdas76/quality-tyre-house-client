// import { Link } from "react-router-dom";

const Product = ({ product, setAddProduct }) => {
    // const { name, image, description, quantity, price } = product;

    // console.log(product);


    return (
        <div className="card lg:max-w-lg text-justify pt-3 bg-base-100 shadow-xl">
            <figure><img className='h-96' src={product.image} alt="Tyre" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    { product.name}
                </h2>
                <p>Description : {product.description}</p>
                <p>Price : {product.price}</p>
                <p>Quantity : {product.quantity}</p>
                
                <div className="card-actions justify-end">

                    <label
                        onClick={() => setAddProduct(product)}
                        htmlFor="booking-modal" className="btn btn-primary btn-secondary text-white">Place Order
                    </label>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;