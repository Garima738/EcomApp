// export default function Cart({cart,totalAmount,removeFromCart}){
//     return (
//         <>
//         <h2>
//             Your cart:</h2>
//             {cart.map((item,index)=>(
                
//                 <p key={index}>{item.name} - {item.price}
//                 <button onClick={() => removeFromCart(index)}>
//                         Remove
//                     </button>
//                     </p>
//             ))}
//         <h3>Total Amount:{totalAmount}</h3>
//         </>
//     )
// }

export default function Cart({ cart, totalAmount, removeFromCart }) {
    return (
        <>
            <h2>Your cart:</h2>

            {cart.map((item, index) => (
                <div key={index}>
                    
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        width="100"
                    />

                    <p>
                        <strong>{item.name}</strong>
                    </p>

                    <p>{item.description}</p>

                    <p>Price: ₹{item.price}</p>

                    <button onClick={() => removeFromCart(index)}>
                        Remove
                    </button>

                    <hr />
                </div>
            ))}

            <h3>Total Amount: ₹{totalAmount}</h3>
        </>
    )
}