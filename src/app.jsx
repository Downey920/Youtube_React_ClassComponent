import React, { Component } from "react";
import styles from "./app.module.css";
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

  render() {
    return (
      <div className={styles.app}>
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
