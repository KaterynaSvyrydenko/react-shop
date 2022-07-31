function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription, 
        price,
        displayAssets,
        addToBasket = Function.prototype
    } = props;

    return <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
                <span className="right" style={{fontSize : '1.8rem'}}>{price.regularPrice} UAH</span>
            </div>
        </div>
  

}

export {GoodsItem};