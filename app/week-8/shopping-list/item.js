import React from 'react';

export default function Item({ itemObj, onSelect }) {
  const { name, category, quantity, id } = itemObj;

  const handleClick = () => {
    onSelect(itemObj);
  };

  return (
    <li
      className="flex-auto text-lg text-slate-900 border-pink-200 border-2 mx-2 my-2 px-2 py-2 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <ul>
        <li className='font-semibold'>{name}</li>
        <li className='text-xs'>ID: {id}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </li>
  );
}