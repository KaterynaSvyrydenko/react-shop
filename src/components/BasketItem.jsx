
function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    return <li className="collection-item">
            <span className="itemName">{displayName} x </span>
            <span className="quantity">{quantity}</span>
            <span className="itemPrice"> = {quantity * price.regularPrice} UAH</span>
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons basket-delete">delete_forever</i>
            </span>
            <span className="secondary-content">
                <span className="itemButton inQuantity" onClick={() => incQuantity(mainId)}>+</span>
                <span className="quantity">{quantity}</span>
                <span className="itemButton decQuantity" onClick={() => quantity <= 1 ? removeFromBasket(mainId) : decQuantity(mainId)}>-</span>
            </span>
               
    </li>;
}

export {BasketItem}