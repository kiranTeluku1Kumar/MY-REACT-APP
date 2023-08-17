import { useState } from "react";
import { ShoppingSPA } from "./ShoppingSPA";
import { Cart } from "./Cart";
import { DisplayCartHOC } from "./DisplayCartHOC";

export const ShoppingCartBodyCopy = () =>{
    const defaultBillingObj = {billingProducts:[],totalItems:0};
    const [billingObj, setBillingObj] = useState(defaultBillingObj);  
    const [totalCartItems, setTotalCartItems] = useState(0); 
    const [sumOfTotals, setSumTotals] = useState(0);
    const [displayCart, setDisplayCart] = useState(false);

    const updateFinalTotals = ()=>{
        const billingProducts = [...billingObj.billingProducts];

        billingProducts.map((billingProduct)=>{
        //     billingProduct && billingProduct.pId  ?
        //    setSumTotals(sumOfTotals + 
        //     (billingProduct.itemCounter * parseFloat(billingProduct.price.substring(1))))
        //     : setSumTotals(sumOfTotals);
        if(billingProduct !== undefined)
        console.log(billingProduct.itemCounter+'::'+billingProduct.price+":::"+billingProduct.pId);
        });
        return sumOfTotals;
    };

    function updateBillingObj({newBillingItem}){
        const billingProductsNew = newBillingItem.billingProducts;
        setTotalCartItems(newBillingItem.totalItems);
        if(billingObj.billingProducts >0){
            const pidIndex =billingObj.billingProducts.findIndex((p) => p.pId === newBillingItem.billingProducts[0].pId);
            if(pidIndex !== -1){
                billingObj.billingProducts[pidIndex].itemCounter = billingObj.billingProducts[pidIndex].itemCounter + 1;
                billingObj.billingProducts[pidIndex] = billingProductsNew[0].billingProducts;
            }else{
                billingObj.billingProducts.push(newBillingItem.billingProducts[0]);
            }
        }else{
            billingObj.billingProducts.push(newBillingItem.billingProducts[0]);
        }
        const updatedBillingObj = {billingProducts:billingProductsNew,totalItems:newBillingItem.totalItems};
        setBillingObj(updatedBillingObj);
       
    }
    function showCartSummary(e) {
        e.preventDefault();
        setDisplayCart(!displayCart);
    }
 return (
 <div className="grid-body-container">
           
        <div className="grid-body-item">
            {/* <div style={{columnSpan:2, textAlign:"right"}}>
                <h3>Cart(<a href="#" onClick={showCartSummary}><Cart billingObj={billingObj} /></a>)</h3>
            </div> */}
            <div className="grid-container">
                <ShoppingSPA onClick={updateBillingObj} totalCartItems={totalCartItems}/>
            {/* {
                displayCart? (<div className="grid-cart-container" id="displayCartSummary" style={{display:displayCart}}>
                    <DisplayCartHOC billingProducts ={billingObj.billingProducts} />
                </div>): null} */}
            </div> 
        </div>
        
 </div>)
}