import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import m from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
      console.log(e.currentTarget);
      console.log(e.target);
    }
  };
  return (
    <div class={m.overlay} onClick={handleBackdropClick}>
      <div class="modal">
        {children}
        <img src="" alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  onClick: PropTypes.func,
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.closeModal();
//     }
//   };
//   handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.closeModal();
//       console.log(e.currentTarget);
//       console.log(e.target);
//     }
//   };

//   render() {
//     return createPortal(
//       <div class={m.overlay} onClick={this.handleBackdropClick}>
//         <div class="modal">
//           {this.props.children}
//           <img src="" alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
// Modal.propTypes = {
//   onClick: PropTypes.func,
// };
