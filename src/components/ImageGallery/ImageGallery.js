import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";


const ImageGallery =({images, toggleModal})=> {
    return (
        <ul className={s.ImageGallery} >
            {images.map((image) => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        onModalOpen={toggleModal}
                    />   
                )
            })}
        </ul>
    )
};

ImageGallery.prototype = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    })),
    toggleModal: PropTypes.func.isRequired,
}

export default ImageGallery;
