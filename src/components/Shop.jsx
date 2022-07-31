import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from './config';
import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {AlertBasket} from './AlertBasket';



function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");
    
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }
    
    const addToBasket = (item) => {
       
        const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId)
      
        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1, 
            }
            setOrder([...order, newItem])
        } else {
            
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.displayName)
        
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(item => item.mainId !== itemId)
        setOrder(newOrder);
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if(item.mainId === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity
                }
            } else {
                return item;
            }
        });

        setOrder(newOrder);
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map( (item) => {
            if(item.mainId === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity <= 0 ? 0 : newQuantity
                }
            } else {
                return item;
            }
        });

        setOrder(newOrder);
    }

    const closeAlert = () => {
        console.log()
        setAlertName("")
    }

    useEffect( function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization' : API_KEY,
            }
        }).then(response => response.json()).then(data => {
           data.shop && setGoods(data.shop);
           setLoading(false); 
        })
    }, [])

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {
            loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
        }
        {
            isBasketShow && (
            <BasketList 
                order={order} 
                handleBasketShow={handleBasketShow}  
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
            />
        )}
        {
            alertName && <AlertBasket name={alertName} closeAlert={closeAlert} />
        }
    </main>
}

export {Shop};