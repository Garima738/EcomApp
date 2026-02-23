

// import {useState} from 'react';
// export default function Search(products){
//     const[find,setFind] = useState("");
//     //const products = ["Laptop","Mobile","Charger"];
//     const product = products.filter((names)=>names.toLowerCase().includes(find.toLowerCase()))
//     return(
//         <div>
//             <h2>
//                 Finds Item
//             </h2>
//             <input type="text"placeholder="Enter key to search"
//             value= {find}
//             onChange = {(e)=>setFind(e.target.value)}/>
//             <ul>
//         {
//         product.map((item, index) => (
//           <li key={index}>
//             <span>{item}</span>
            
//           </li>
//         ))}
//       </ul>


//         </div>
//     )
// }

import { useState } from "react"
export default function Search({products}){
    const[search,setSearch]=useState("")
    // const name=["Laptop","Mobile","Charger"];

    const product=products.filter((items)=>items.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <>
        <h2>Finding Item</h2>
        <input type="text"
        placeholder="Enter key to search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

        <ul>
        {product.map((item, index) => (
          <li key={item.id}>
             {/* <img src={item.image} alt={item.name} width="50" /> */}
            <p>{item.name}</p>
            {/* <p>₹{item.price}</p> */}
          </li>
        ))}
      </ul>
        </>
    )
}