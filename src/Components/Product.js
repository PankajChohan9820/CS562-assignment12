import { Component } from "react";
import { Filter } from "./Filter";
import { ProductForm } from "./ProductForm";
import { ProductTable } from "./ProductTable";
const PRODUCTS = {
    '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
    '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
    '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
    '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
 };
 
export class Product extends Component{
    constructor(props){
        super(props);
        this.state ={
            product: PRODUCTS,
            filter: ''
        }
        this.deleteById = this.deleteById.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.setFilter = this.setFilter.bind(this)
    }

    setFilter(filterContent){
        this.setState({filter: filterContent})
    }

    deleteById(id){
        // ... spread operator creates copy of object
        const updatableProducts = {...this.state.product}
        delete updatableProducts[id]
        this.setState({product:{...updatableProducts}})
    }

    addProduct(product){
        const newId = Math.max(...Object.keys(this.state.product))+1
        product.id= newId;
        const updatableProducts = {...this.state.product}
        updatableProducts[product.id] = product;
        this.setState({product:{...updatableProducts}})
    }


    render(){
        return(
            <div style={{paddingLeft:"30px"}}>
            <h1>My Inventory</h1>
            <Filter style={{padding:"20px"}} filter={this.state.filter} setFilter={this.setFilter}/>
            <ProductTable product={this.state.product} deleteById={this.deleteById} filter={this.state.filter}/>
            <h3 >Enter a new product</h3>
            <ProductForm addProduct={this.addProduct}/>
            </div>
        )
    }
       
}