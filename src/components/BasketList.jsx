import {BasketItem} from './BasketItem';


function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity  = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce( (sum, el) => {
        return sum + el.price.regularPrice * el.quantity;
    }, 0);

    return  <div className="collection basket-list">
        <li className="collection-item active">Cart</li>
        {
            order.length ? order.map(item => (
                <BasketItem 
                    key={item.mainId} 
                    {...item} 
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity} 
                />
            )) : <li className='collection-item'>Basket is empty</li>

        }
        <li className="collection-item active">Price: {totalPrice} UAH </li>
        <li className="secondary-content">
            <button className="btn btn-checkout">Cheackout</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </div>
}

export {BasketList}