"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItemPage from './new-item';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Shopping List</h1>
      <ItemList items={items} />
      <NewItemPage onAddItem={handleAddItem}/>
    </main>
  );
}

