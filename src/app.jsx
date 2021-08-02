import React, { Component } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import Videos from "./components/video_list/videos";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyCLa7D2kMUdQtWa8wAj2hpWciL1ksrtSA8",
      requestOptions
    )
      .then(response => response.json())
      .then(result => this.setState({ videos: result.items }))
      .catch(error => console.log("error", error));
  }

  handleSearch = input => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${input}&regionCode=KR&key=AIzaSyCLa7D2kMUdQtWa8wAj2hpWciL1ksrtSA8`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => this.setState({ videos: result.items }))
      .catch(error => console.log("error", error));
  };

  render() {
    console.log(this.state.videos);
    return (
      <div className={styles.app}>
        <Navbar onSearch={this.handleSearch} />
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
