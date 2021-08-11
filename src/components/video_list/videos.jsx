import React, { PureComponent } from "react";
import Video from "../video_item/video";
import styles from "./videos.module.css";

class Videos extends PureComponent {
  render() {
    return (
      <ul className={styles.videos}>
        {this.props.videos.map(video => (
          <Video
            key={video.id.videoId || video.id}
            video={video}
            onVideoClick={this.props.onVideoClick}
            display={this.props.display}
          />
        ))}
      </ul>
    );
  }
}

export default Videos;
