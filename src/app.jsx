import React, { Component } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import Videos from "./components/video_list/videos";

class App extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.props.youtube
      .mostPopular() //
      .then(videos => this.setState({ videos }))
      .catch(error => console.log("error", error));
  }

  handleSearch = query => {
    this.props.youtube
      .search(query)
      .then(searchedVideos => this.setState({ videos: searchedVideos }))
      .catch(error => console.log("error", error));
  };

  render() {
    return (
      <div className={styles.app}>
        <Navbar onSearch={this.handleSearch} />
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
