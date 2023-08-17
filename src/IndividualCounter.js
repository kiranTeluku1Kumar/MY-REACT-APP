import { useEffect, useState } from "react";

export const IndividualCounter = ({onClick,totalCartItems, product}) => {
    const [updatedTotalCartItems, setUpdateTotalCartItems] = useState(totalCartItems);
    const [itemCounter, setItemCounter] = useState(0);
    const incrementIndividualCounter = ()=>{
        setItemCounter(itemCounter+1);
        setUpdateTotalCartItems(updatedTotalCartItems+1);
    }
    const decrementIndividualCounter = ()=>{
        if (itemCounter > 0 ){
            setItemCounter(itemCounter-1);
            setUpdateTotalCartItems(updatedTotalCartItems-1);
        } else{
            setItemCounter(0);
        }}
    useEffect(()=>{
        if (itemCounter > 0) {
            const newBillingItem = {
                billingProducts: [
                    { pId: product.id, 
                        productName: product.productName,
                        price: product.price,
                        itemCounter: itemCounter}],
                totalItems: updatedTotalCartItems
            };
            onClick({newBillingItem});
        }else if (itemCounter === 0){
            const newBillingItem = {
                billingProducts: [],
                totalItems:0
            };
            onClick({newBillingItem});
        }
       
    },[itemCounter]);
    return (<div style={{paddingLeft:'50px'}}>
        <button onClick={incrementIndividualCounter}>+</button> 
              {itemCounter}
        <button onClick={decrementIndividualCounter}>-</button>
    </div>);
};
