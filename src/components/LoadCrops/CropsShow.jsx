import BookedCropList from './BookedCropsList';
import BookedCropItem from './BookedCropItem';

const CropsShow = () => {
    return(
        <div className="bookedcropshow">
        {
            BookedCropList.map((crop) => {
                return <BookedCropItem crop={crop}/>
            })
        }
        </div>
    )
}
export default CropsShow;