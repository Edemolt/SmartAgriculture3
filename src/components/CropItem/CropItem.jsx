
const CropItem = ({crop}) => {

    const {id,name, price} = crop;
    console.log(name);
    return(
        <div className="crop-price-closer" key={id}>
                <h2>Crop -> {name}</h2>
                <h3>Price -> {price}</h3>
        </div>
    )
}

export default CropItem;