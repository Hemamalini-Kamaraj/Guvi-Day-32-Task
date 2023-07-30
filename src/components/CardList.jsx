function CartList({ cartItem, removeFromCart }) {
  
  return (
      <>
       <div className='col-6'>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="mx-5 ">{cartItem.id}</div>
            <div className="text-start  fw-bold">{cartItem.title}</div>
            <button className="btn rounded" onClick={()=>{removeFromCart(cartItem)}}>Return</button>
          </li>
        </div>
      </>
  );
}
export default CartList;