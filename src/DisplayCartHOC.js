import { useEffect } from "react";

export const DisplayCartHOC = ({billingProducts}) =>{
        useEffect(()=>{},[billingProducts])
       return( <div className="grid-cart-container">
       { 
        billingProducts != null ?billingProducts.map( (billingProduct) =>{
            return (
                <div className="grid-cart-item" key={billingProduct.id}>
                    <h3>{billingProduct.productName}</h3>
                    <h3>{billingProduct.price}</h3>                    
                    <h3>Item-Count : {billingProduct.price}</h3>                    
                    <h3>Sub-Total : {parseFloat(billingProduct.price.substring(1))*billingProduct.itemCounter}</h3>                   
                </div>
            );
        })
        :<h3>No billing products found</h3>
       }
    </div>);
}