import React from 'react'
import { useRouter } from 'next/navigation';

const ProductBody = ({product, deleteProduct}) => {
    // const {productId,productName,productDescription,productPrice,productStock}=product
    const navigate=useRouter()
    const updateProduct=(e,id)=>{
        e.preventDefault();
        navigate.push(`/updateProduct/${id}`);
    }

    return (
        <tr key={product.productId}>
            <td className="text-left font-medium text-gray-600 tracking-wider py-3 px-6 whitespace-nowrap">{product.productId}</td>
            <td className="text-left font-medium text-gray-600 tracking-wider py-3 px-6">{product.productName}</td>
            <td className="text-left font-medium text-gray-600 tracking-wider py-3 px-6">{product.description}</td>
            <td className="text-left font-medium text-gray-600 tracking-wider py-3 px-6">{product.price}$</td>
            <td className="text-left font-medium text-gray-600 tracking-wider py-3 px-6">{product.stock}</td>
            <td className="text-right font-medium text-gray-600 tracking-wider py-3 px-6">
                <a 
                onClick={(e,id)=>{
                    updateProduct(e,product.productId)
                }}
                href="/" 
                className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Update</a>

                <a href="/"
                    onClick={(e, id) => {
                        deleteProduct(e, product.productId)
                    }}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a>
            </td>
        </tr>
    )
}

export default ProductBody