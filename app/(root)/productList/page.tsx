'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import productService from '../../../actions/productService';
import ProductBody from '../../../component/productBody';
import {productList} from '@/data'


const ProductList = () => {

    const navigate = useRouter();

    const [products, setProducts] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setloading(true);
            try {
                const response = await productService.getProduct();
                setProducts(response.data);
                console.log("SettingProduct");
            }
            catch (error) {
                console.log(error);
            }
            setloading(false);
        }
        fetchProduct();
        setloading(false);
    }, []);

    const deleteProduct=(e,id)=>{
        setloading(true)
        try {
            productService.deleteProduct(id).then((res)=>{
                console.log(id+" deleting ");
                setloading(false)
            });
        } catch (error) {
            console.log(error+" Cannot able to delete");
        }
    }


    return (
        <div className="container mx-auto my-4">
            <div className='h-12'>
                <button
                    onClick={() => navigate.push("/addProduct")}
                    className="rounded bg-yellow-500 text-white font-semibold px-4 py-2 hover:bg-yellow-700">Add Product</button>
            </div>
            <div className="flex shadow border-b-2 my-2">
                <table className="min-w-full">
                    <thead className="bg-yellow-100">
                        <tr>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">ProductId</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">ProductName</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Product Description</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Price$</th>
                            <th className="text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6">Stock</th>
                            <th className="text-right font-medium text-gray-600 uppercase tracking-wider py-3 px-16">Actions</th>

                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {productList?.map((product) => (
                                <ProductBody 
                                key={product.id} 
                                product={product}
                                deleteProduct={deleteProduct}/>
                            ))}
                        </tbody>
                    )
                    }
                </table>
            </div>
        </div>
    )
}

export default ProductList