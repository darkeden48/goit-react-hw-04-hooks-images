import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import { fetchImage } from "./services/image-api";

export default function App() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);
  const [image, setImage] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(null);

  useEffect(() => {
    setImage([]);
    setPage(1);
  }, [input]);

  useEffect(() => {
    if (!input || input === " ") {
      return;
    }
    setStatus("pending");
    fetchImage(input, page)
      .then((data) => {
        if (data.hits.length === 0) {
          setShowLoadMoreBtn(false);
          setStatus("rejected");
          return;
        }
        setImage((prevImage) =>
          page === 1 ? data.hits : [...prevImage, ...data.hits]
        );
        setShowLoadMoreBtn(true);
        setStatus("resolved");
        if (setPage) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
        if (data.hits.length < 15) {
          setShowLoadMoreBtn(false);
        }
        return;
      })
      .catch((error) => setError(true));
  }, [input, page]);

  const handleSubmite = (input) => {
    setInput(input);
  };

  const modalToggle = () => {
    setShowModal((showModal) => !showModal);
  };

  const onOpenLargeImage = (selectedImage, selectedAlt) => {
    setModalImage(selectedImage);
    setModalAlt(selectedAlt);
    modalToggle();
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmite} />
      {status === "idle" && <p>Введите название картинки</p>}
      {status === "resolved" && (
        <ImageGallery onOpen={onOpenLargeImage} image={image} />
      )}
      {status === "pending" && <Loader />}
      {status === "rejected" && (
        <h1>Картинок по запросу '{input}' не найдено</h1>
      )}
      {showLoadMoreBtn && <Button onClick={onLoadMoreClick} />}
      {showModal && (
        <Modal closeModal={modalToggle}>
          <img src={modalImage} alt={modalAlt} />
        </Modal>
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
