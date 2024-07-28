"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItemPage from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.trim());
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Shopping List</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <NewItemPage onAddItem={handleAddItem} />
      {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
    </main>
  );
}

