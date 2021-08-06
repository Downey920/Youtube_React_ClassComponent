import React, { Component } from "react";
import styles from "./video.module.css";

class Video extends Component {
  handleDetail = () => {
    this.props.onVideoClick(this.props.video);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  render() {
    const snippet = this.props.video.snippet;
    const displayType =
      this.props.display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.video} ${displayType}`}
        onClick={this.handleDetail}
      >
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
