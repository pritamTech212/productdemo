'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import productService from '@/actions/productService';
const UpdateProduct = () => {

    const {id}=useParams();
    const[product,setProduct]=useState({
        "productId": id,
        "productName": "",
        "description": "",
        "price": 0,
        "stock": 0
    })

    const handleChange =(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value})
    }
    const updateProduct=(e)=>{
        e.preventDefault();
        console.log(product);
        productService.updateProduct(product, id)
        .then((response)=>{
            navigator.push("/");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        const fetchData=async()=>{
            try {
                const response=await productService.getProductById(id);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        console.log("updating");
        fetchData();
    }, [])


    const navigator =useRouter();

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update Product</h1>
                </div>
                <div className="items-center justify-center h-20">
                    <label className="block font-normal text-sm text-gray-500">
                        Product Id
                    </label>
                    <input
                        type="text"
                        name="productId"
                        value={product.productId}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 px-2 py-2 border flex text-slate-800 dark:text-slate-800 mt-2 text-sm"></input>
                </div>
                <div className="items-center justify-center h-20">
                    <label className="block font-normal text-sm text-gray-500">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="productName"
                        value={product.productName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 px-2 py-2 w-96 border flex text-slate-800 dark:text-slate-800 mt-2 text-sm"></input>
                </div>
                <div className="items-center justify-center h-20">
                    <label className="block font-normal text-sm text-gray-500">
                        Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 px-2 py-2 border flex text-slate-800 dark:text-slate-800 mt-2 text-sm"></input>
                </div>
                <div className="items-center justify-center h-20">
                    <div></div>
                    <label className="block font-normal text-sm text-gray-500">
                        Price$
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={(e) => handleChange(e)}
                        className="h-10 px-2 py-2 border flex text-slate-800 dark:text-slate-800 mt-2 text-sm"></input>
                </div>

                <div className=" flex items-center h-14 w-full my-4 space-x-4">
                    <div className="items-center justify-center h-20">
                        <button
                            onClick={updateProduct}
                            className='rounded bg-green-500 text-white font-semibold px-4 py-2 hover:bg-green-700'>
                            Update
                        </button>
                    </div>
                    <div
                        className="items-center justify-center h-20">
                        <button 
                        onClick={()=>navigator.push("/productList")}
                        className='rounded bg-red-500 text-white font-semibold px-4 py-2 hover:bg-red-700'>
                            Cancel!
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UpdateProduct