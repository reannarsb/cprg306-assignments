"use client"
import React, { useState } from 'react';
import Item from './item';
import initialItems from './items.json';

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("name");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      quantity: quantity,
      category: category
    };
    setItems([...items, newItem]);
    setItemName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            className="block w-full p-2 mb-2"
            required
          />
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            className="block w-full p-2 mb-2 text-black"
            min="1"
            required
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="block w-full p-2 mb-2 text-black">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="household">Household</option>
          </select>
          <button type="submit" className="block w-full p-2 bg-pink-400 text-white rounded-lg">Add Item</button>
        </form>
        <ul className="list-none">
          {sortedItems.map((item) => (
            <Item key={item.id} itemObj={item} />
          ))}
        </ul>
      </div>

      <div className="rounded flex px-10 py-5 bg-pink-300 mb-5">
        <div className='flex-1'>
          <label>Sort By:</label>
          <button
            onClick={() => setSortBy("name")}
            className="mx-2 px-2 py-1 text-black">Name</button>
          <button
            onClick={() => setSortBy("category")}
            className="mx-2 px-2 py-1 text-black">Category</button>
        </div>
      </div>
    </div>
  );
}
