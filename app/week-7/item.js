import React from 'react';

export default function Item({ itemObj }) {
  const { name, category, quantity, id } = itemObj;

  return (
    <li className="flex-auto text-lg text-slate-900 border-pink-200 border-2 mx-2 my-2 px-2 py-2 rounded-md">
      <ul>
        <li className='font-semibold'>{name}</li>
        <li className='text-xs'>ID: {id}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </li>
  );
}
