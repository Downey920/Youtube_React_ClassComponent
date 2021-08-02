import React, { Component } from "react";
import styles from "./navbar.module.css";

class Navbar extends Component {
  inputRef = React.createRef();

  handleSearch = e => {
    e.preventDefault();
    this.inputRef.current.value &&
      this.props.onSearch(this.inputRef.current.value);
  };

  render() {
    return (
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" className={styles.img} />
          <h1 className={styles.title}>Youtube</h1>
        </a>
        <form className={styles.search} onSubmit={this.handleSearch}>
          <input
            ref={this.inputRef}
            type="text"
            className={styles.input}
            placeholder="Search..."
          />
          <button className={styles.btn}>
            <i className={`fas fa-search ${styles.img}`}></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
