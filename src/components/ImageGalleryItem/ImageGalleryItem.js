import PropTypes from "prop-types";
import { Component } from "react";

export default function ImageGalleryItem({
  webformatURL,
  tags,
  onSelect,
  largeImageURL,
}) {
  //  function choco (e) {
  //     this.props.onClickElem(e);
  // // console.log(e.target)
  // }

  // if (image.length===0) {
  //   return <h1>Картинок по такому запросу не найдено</h1>;
  // }
  return (
    <li>
      <img
        src={webformatURL}
        alt={tags}
        width="250"
        height="250"
        onClick={() => onSelect(largeImageURL, tags)}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
