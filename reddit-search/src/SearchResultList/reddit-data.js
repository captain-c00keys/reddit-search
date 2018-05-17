import React, { Component } from 'react'

class RedditData extends Component {

  render() {
    return (
      <ul className="results">
      {
        this.props.topics.map((topic) => topic.data).map((data) =>
            <li key={data.url.toString()}><a href={data.url}>
                <h3>Entry Title: {data.title}</h3>
                <p>Entry Up Votes: {data.ups}</p>
            </a></li>
        )
      }
      </ul>
    )
  }
}

export default RedditData