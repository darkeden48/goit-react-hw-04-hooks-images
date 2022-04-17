import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

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

  return (
    <div>
      <Searchbar onSubmit={handleSubmite} />
      <ImageGallery input={input} onOpen={onOpenLargeImage} />

      {showModal && (
        <Modal closeModal={modalToggle}>
          <img src={modalImage} alt={modalAlt} />
        </Modal>
      )}
    </div>
  );
}
