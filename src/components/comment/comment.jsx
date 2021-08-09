import React, { Component } from "react";
import styles from "./comment.module.css";

class Comment extends Component {
  state = {
    replies: this.props.comment.replies,
    showReplies: false,
  };

  showReplies = () => {
    const flag = this.state.showReplies ? false : true;
    this.setState({ showReplies: flag });
  };

  render() {
    return (
      <>
        <li className={styles.comment}>
          <a
            href={
              this.props.comment.snippet.topLevelComment.snippet
                .authorChannelUrl
            }
          >
            <img
              className={styles.profileImg}
              src={
                this.props.comment.snippet.topLevelComment.snippet
                  .authorProfileImageUrl
              }
              alt="userProfile"
            />
          </a>
          <div>
            <div className={styles.name}>
              {
                this.props.comment.snippet.topLevelComment.snippet
                  .authorDisplayName
              }
            </div>
            <pre className={styles.text}>
              {this.props.comment.snippet.topLevelComment.snippet.textDisplay}
            </pre>
            <span className={styles.likes}>
              <i className="fas fa-thumbs-up"></i>
              <span className={styles.likeCnt}>
                {this.props.comment.snippet.topLevelComment.snippet.likeCount}
              </span>
            </span>
            {this.state.replies && (
              <>
                <button
                  className={styles.showMoreBtn}
                  onClick={this.showReplies}
                >
                  {this.state.showReplies ? "댓글접기" : "댓글보기"}
                </button>
                <ul className={styles.replies}>
                  {this.state.showReplies &&
                    this.state.replies.comments.map(reply => (
                      <li key={reply.id} className={styles.reply}>
                        <a href={reply.snippet.authorChannelUrl}>
                          <img
                            className={styles.replyProfileImg}
                            src={reply.snippet.authorProfileImageUrl}
                            alt="userProfile"
                          />
                        </a>

                        <div>
                          <div className={styles.replyName}>
                            {reply.snippet.authorDisplayName}
                          </div>
                          <pre className={styles.replyText}>
                            {reply.snippet.textDisplay}
                          </pre>
                          <span className={styles.replyLikes}>
                            <i className="fas fa-thumbs-up"></i>
                            <span className={styles.replyLikeCnt}>
                              {reply.snippet.likeCount}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
        </li>
      </>
    );
  }
}

export default Comment;
