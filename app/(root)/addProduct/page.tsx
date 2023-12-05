'use client'
import React, { useState } from 'react'
// import productService from "../service/ProductService"
import { useRouter } from 'next/navigation'

const AddProduct = () => {

    const [product, setProduct] = useState({
        "productId": "",
        "productName": "",
        "description": "",
        "price": 0,
        "stock": 0
    })

    const navigate = useRouter();

    const handleChange = (e:any) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value })
    }

    const saveProduct = (e:any) => {
        e.preventDefault();
        // productService.saveProduct(product)
            // .then((response:any) => {
            //     console.log(response);
                navigate.push("/productList");
            // })
            // .catch((error:any) => {
            //     console.log(error);
            // })
    }

    const resetData = (e:any) => {
        e.preventDefault();
        setProduct({
            "productId": "",
            "productName": "",
            "description": "",
            "price": 0,
            "stock": 0
        }

        )
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>AddProduct</h1>
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
                            onClick={saveProduct}
                            className='rounded bg-yellow-500 text-white font-semibold px-4 py-2 hover:bg-yellow-700'>Save</button>
                    </div>
                    <div
                        onClick={resetData}
                        className="items-center justify-center h-20">
                        <button className='rounded bg-red-500 text-white font-semibold px-4 py-2 hover:bg-red-700'>Clear!</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddProduct