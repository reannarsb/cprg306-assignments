
export default function Item({ itemObj }) {
    const { name, category, quantity } = itemObj;
  
    return (
      <div className="flex-auto text-lg font-semibold text-slate-900 border-blue-100 border-2 mx-2 my-2 px-2 py-2">
        <ul>
          <li>{name}</li>
          <li>Quantity: {quantity}</li>
          <li>Category: {category}</li>
        </ul>
        <br></br>
      </div>
    );
  }
  