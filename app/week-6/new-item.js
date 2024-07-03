"use client"

import { useState } from "react";

export default function NewItemPage({ onAddItem, nextId }) {
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

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  let inputStyle = "mx-2 rounded-lg border-2 pl-1 text-gray-500";
  let labelStyle = "text-lg ml-2 font-bold text-black";

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-1">
        <label className={labelStyle}>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          className={inputStyle} 
        />
      </div>

      <div className="my-1">
        <label className={labelStyle}>Quantity: </label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(event) => setQuantity(event.target.value)} 
          className={inputStyle} 
        />
      </div>

      <div className="my-1">
        <label className={labelStyle}>Category: </label>
        <input 
          type="text" 
          value={category} 
          onChange={(event) => setCategory(event.target.value)} 
          className={inputStyle} 
        />
      </div>

      <div className="mt-5 px-2">
        <button 
          type="submit" 
          className="px-1 py-1 bg-pink-200 hover:bg-pink-300 text-black border-none rounded-xl">Add Item</button>
      </div>
    </form>
  );
}
