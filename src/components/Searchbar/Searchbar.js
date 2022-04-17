import { useState } from "react";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="input"
          value={input}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

// class Searchbar extends Component {
//   state = {
//     input: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.input);
//     this.reset();
//   };

//   handleChange = (event) => {
//     this.setState({
//       input: event.currentTarget.value,
//     });
//   };

//   reset = (e) => {
//     this.setState({
//       input: "",
//     });
//   };

//   render() {
//     return (
//       <header>
//         <form onSubmit={this.handleSubmit}>
//           <button type="submit">
//             <span>Search</span>
//           </button>

//           <input
//             type="text"
//             name="input"
//             value={this.state.input}
//             onChange={this.handleChange}
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
//   onChange: PropTypes.func,
// };
