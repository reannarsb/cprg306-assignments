"use client"
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
    <div className="rounded flex px-10 py-5 bg-pink-300 mb-5 text-black">
        <div className='flex-1'>
          <label className='font-bold'>Sort By:</label>
          <button
            onClick={() => setSortBy("name")}
            className="mx-2 px-2 py-1 bg-pink-100 rounded-xl" >Name </button>
           <button
            onClick={() => setSortBy("category")}
            className="mx-2 px-2 py-1 bg-pink-100 rounded-xl">Category </button>
        </div>
    </div>
      <div className="container mx-auto p-4">
        <ul className="list-none">
          {sortedItems.map((item) => (
            <Item key={item.id} itemObj={item} />
          ))}
        </ul>
      </div>

    </div>
  );
}
