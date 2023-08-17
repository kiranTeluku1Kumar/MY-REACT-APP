import {IndividualCounter} from './IndividualCounter';
import './Shopping.css';
import products from './data_samples/Products.json';

export const ShoppingSPA = ({onClick,totalCartItems}) =>{
    return (<div className="grid-container">
                { 
                    products != null ? products.map((product) => {
                   return (
                    <div className="grid-item" key={product.id}>
                        <h3>Product Id: {product.id}</h3><br/>
                        <h3>Product Name: {product.productName}</h3><br/>
                        <h3>Product Price: {product.price}</h3><br/>
                        <IndividualCounter onClick={onClick} totalCartItems={totalCartItems} product={product}/>
                    </div>
                    );
                }): <h3>No products found</h3>}
    </div>);
}