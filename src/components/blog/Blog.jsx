import React, { Component } from "react";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    fetch("/api/contents")
      .then((res) => res.json())
      .then((contents) =>
        this.setState({ contents }, () => console.log("Content fetched..."))
      );
  }

  render() {
    return (
      <>
        <div>
          <ul className="blog_box">
            {this.state.contents.map((content) => (
              <li key={content.id}>{content.text}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Blog;
