import React, { Component } from "react";
import Comment from "../comment/comment";
import styles from "./video_detail.module.css";

class VideoDetail extends Component {
  render() {
    const { id, snippet } = this.props.selectedVideo;
    return (
      <div className={styles.container}>
        <div className={styles.responsive}>
          <iframe
            className={styles.videoPlayer}
            type="text/html"
            title="youtube video player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id.videoId || id}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={styles.metadata}>
          <h4 className={styles.title}>{snippet.title}</h4>
          <span className={styles.publishTime}>
            {snippet.publishedAt.slice(0, 10)}
          </span>
          <pre className={styles.description}>{snippet.description}</pre>
        </div>

        <ul className={styles.comments}>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}

export default VideoDetail;
