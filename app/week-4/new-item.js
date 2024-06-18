"use client"

import { useState } from "react";

export default function NewItemPage(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const handleSubmit = (event) => {
        event.preventDefault();
    
        let newItem = {
            name: name,
            quantity: quantity,
            category: category,
        };
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    };

    let inputStyle = "mx-2"
    let labelStyle = "text-lg ml-2"


    return (
        <form onSubmit={handleSubmit} >
            <div className="my-1">
                <label className= {labelStyle}>Name: </label>
                <input type="text" value={name} className={inputStyle}/>
            </div>

            <div  className="my-1">
                <label className= {labelStyle} >Quantity: </label>
                <input type="text" value={quantity}  className={inputStyle}/>
            </div>

            <div className="my-1">
                <label className= {labelStyle}>Category: </label>
                <input type="text" value={category}  className={inputStyle}/>
            </div>

            <div className="mt-5 px-2">
                <button type="submit" className="px-1 py-1 bg-pink-200 hover:bg-pink-300 text-black border-none rounded-xl">Add Item</button>
            </div>

        </form>
    );
}

