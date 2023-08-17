import './Shopping.css';

export const DisplayCart = ({billingProduct}) => {

    return(
            <div className="grid-cart-item">
                <h4>{billingProduct.productName}</h4>
                <h4>{billingProduct.itemCounter}</h4>
                <h4>{billingProduct.price}</h4>
                <h4>Total:-{parseFloat(billingProduct.price.substring(1))*billingProduct.itemCounter}</h4>
            </div>
    )
};
