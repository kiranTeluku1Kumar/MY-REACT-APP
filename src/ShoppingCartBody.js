import { useState } from "react";
import { ShoppingSPA } from "./ShoppingSPA";

export const ShoppingCartBody = () =>{
    const defaultBillingObj = {billingProducts:[],totalItems:0};
    const [billingObj, setBillingObj] = useState(defaultBillingObj);  
    const [totalCartItems, setTotalCartItems] = useState(0); 

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
 return (
    <div className="grid-body-container">
        <div className="grid-body-item">
            <div className="grid-container">
                <ShoppingSPA onClick={updateBillingObj} totalCartItems={totalCartItems}/>
            </div> 
        </div>
    </div>
)
}