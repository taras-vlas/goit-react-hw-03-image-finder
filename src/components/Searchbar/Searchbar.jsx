/*    Рядок пошуку   Searchbar
 * Компонент приймає один проп `onSubmit` - функцію для передачі
 * значення інпут при сабміті форми /проверки (валидации) формы перед отправкой на сервер/. 
 * Створює DOM-елемент такої структури. 
 */
import React, { Component } from "react";
// import PropTypes from "prop-types";
// //import styles from "./Searchbar.module.css";
import "../../styles.css";

//class Searchbar extends Component {
export default class Searchbar extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
        </form>
      </header>
    )
  }
}

//export default Searchbar;




// const Searchbar = ({ onSubmit }) => (

//       //Створює DOM-елемент такої структури
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={onSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//               name="search"
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
  
//   Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired
//   };

// export default Searchbar;











     /* 
      *  on class 
      */
// class Searchbar extends Component {
//   state = {
//     queryString: ""
//     //searchQuery: ""
//   };

//   //Створює DOM-елемент такої структури
//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm">
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
//   /* определения propTypes  внутри класса Searchbar - ключевоe словo static*/
//   // static propTypes = {
//   // onSubmit: PropTypes.func.isRequired
//   // };
// };
// /* Визначення propTypes зовні класу Searchbar */
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

// export default Searchbar;