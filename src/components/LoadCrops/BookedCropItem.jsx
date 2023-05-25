const BookedCropItem = ({crop}) => {

    const {id,name, quantity} = crop;
    console.log(name);
    return(
        <div className="crop-price-closer" key={id}>
                <h2>Crop -> {name}</h2>
                <h3>Quantity -> {quantity} quintals</h3>
        </div>
    )
}

export default BookedCropItem;