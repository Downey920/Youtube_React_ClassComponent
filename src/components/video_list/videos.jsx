import React, { Component } from "react";
import Video from "../video_item/video";
import styles from "./videos.module.css";

class Videos extends Component {
  render() {
    return (
      <ul className={styles.videos}>
        {this.props.videos.map(video => (
          <Video key={video.id.videoId || video.id} video={video} />
        ))}
      </ul>
    );
  }
}

export default Videos;
