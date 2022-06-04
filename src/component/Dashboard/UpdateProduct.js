import React from 'react';

const UpdateProduct = ({ product, updateProduct }) => {

    console.log(product);
    
    return (
        <div>
            <h1>Update Products</h1>
            <input type="checkbox" id="updateproduct" className="modal-toggle" />
            
            <div className="modal">
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                    <p className="py-4"></p>
                </div>
                <div>
                    <button onClick={updateProduct}></button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;