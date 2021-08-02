import React, { Component } from "react";
import styles from "./video.module.css";

class Video extends Component {
  render() {
    const snippet = this.props.video.snippet;
    return (
      <li className={styles.video}>
        <img
          src={snippet.thumbnails.medium.url}
          alt="Thumbnail"
          className={styles.thumbnail}
        />
        <div className={styles.metadata}>
          <p className={styles.title}>
            {snippet.title.length > 50
              ? snippet.title
                  .slice(0, 50)
                  .replace(/&#39;/g, "'")
                  .replace(/&quot;/g, '"') + "..."
              : snippet.title
                  .replace(/&#39;/g, "'") //
                  .replace(/&quot;/g, '"')}
          </p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </li>
    );
  }
}

export default Video;
