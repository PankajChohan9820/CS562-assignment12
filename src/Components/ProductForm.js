import { useState } from "react";

export const ProductForm = ({addProduct}) => {
    
    const [inputs, setInput] = useState({name:'',category:'', price:0});
    return (
        <form >
            <label><strong>Name:</strong><br/>
                <input type="text" name = "name" value={inputs.name} onChange={e=>setInput({...inputs, name:e.target.value})}/>
            </label><br/><br/>
            <label><strong>Category:</strong><br/>
                <input type="text" name="category" value={inputs.category}onChange={e=>setInput({...inputs, category:e.target.value})}/>
            </label><br/><br/>
            <label><strong>Price:</strong>
                <br/>
                <input type="text" name="price" value={inputs.price}onChange={e=>setInput({...inputs, price:e.target.value})}/>
            </label><br/>
            <br/>
            <input type="submit" className="btn btn-primary" value="Save" onClick={(e)=>{
                e.preventDefault()
                addProduct({category:inputs.category, price:'$'+inputs.price, name:inputs.name})}
            }/>
        </form>
    )
}