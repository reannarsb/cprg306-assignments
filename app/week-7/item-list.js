"use client"

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {

  const [sortBy, setSortBy] = useState('name');

  let sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section>
      <div className="rounded-2xl flex px-10 py-5 bg-pink-200 mb-5 text-black">
        <div className='flex-1'>
          <label className='font-bold'>Sort By:  </label>
          <select onChange={handleSortChange} value={sortBy} className='rounded-lg bg-pink-50'>
            <option value='name'>Name</option>
            <option value='category'>Category</option>
          </select>
        </div>
      </div>
 
      <div className="container mx-auto p-4">
        <ul className="list-none">
          {sortedItems.map((item) => (
            <Item key={item.id} itemObj={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

