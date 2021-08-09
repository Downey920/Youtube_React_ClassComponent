import React, { Component } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import VideoDetail from "./components/video_detail/video_detail";
import Videos from "./components/video_list/videos";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    comments: [],
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
      .then(searchedVideos =>
        this.setState({ videos: searchedVideos, selectedVideo: null })
      )
      .catch(error => console.log("error", error));
  };

  handleDetail = selectedVideo => {
    const seletedVideoId = selectedVideo.id.videoId || selectedVideo.id;
    this.props.youtube
      .comments(seletedVideoId) //
      .then(result => this.setState({ comments: result.items, selectedVideo }))
      .catch(error => console.log("error", error));
  };

  render() {
    console.log(this.state.videos);
    const display = this.state.selectedVideo ? "list" : "grid";
    return (
      <div className={styles.app}>
        <Navbar onSearch={this.handleSearch} />
        <section className={styles.content}>
          {this.state.selectedVideo && (
            <div className={styles.videoDetail}>
              <VideoDetail
                selectedVideo={this.state.selectedVideo}
                comments={this.state.comments}
              />
            </div>
          )}
          <div className={styles.videoList}>
            <Videos
              videos={this.state.videos}
              onVideoClick={this.handleDetail}
              display={display}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
