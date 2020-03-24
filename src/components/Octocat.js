import React, { Component } from 'react'
// This component requires three props
// imageSource - What is the image to show
// octocatNumber - What is the cat number to show
// octocatName - What is the cat name to show
export class Octocat extends Component {
  render() {
    return (
      <li>
        <setion>
          <img src={this.props.imageSource} />
        </setion>
        <section>
          <p class="black">#{this.props.octocatNumber}</p>
          <p class="bold">{this.props.octocatName}</p>
        </section>
      </li>
    )
  }
}
