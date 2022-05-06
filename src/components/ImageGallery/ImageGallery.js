import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import I from "./ImageGallery.module.css";
import PropTypes from "prop-types";

export default function ImageGallery({ image, onOpen }) {
  return (
    <div>
      {image && (
        <ul className={I.list}>
          {image.map((el) => (
            <ImageGalleryItem
              key={el.id}
              webformatURL={el.webformatURL}
              tags={el.tags}
              largeImageURL={el.largeImageURL}
              onSelect={onOpen}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
ImageGallery.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
