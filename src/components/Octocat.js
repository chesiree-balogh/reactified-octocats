import React from 'react'

// This component requires three props
// imageSource - What is the image to show
// octocatNumber - What is the cat number to show
// octocatName - What is the cat name to show

export const Octocat = (props) => {
  return (
    <li>
      <section>
        <img alt={props.octocatName} src={props.imageSource} />
      </section>
      <section>
        <p className="black">#{props.octocatNumber}</p>
        <p className="bold">{props.octocatName}</p>
      </section>
    </li>
  )
}

// export class Octocat extends Component {
//   render() {
//     return (
//       <li>
//         <section>
//           <img src={this.props.imageSource} />
//         </section>
//         <section>
//           <p className="black">#{this.props.octocatNumber}</p>
//           <p className="bold">{this.props.octocatName}</p>
//         </section>
//       </li>
//     )
//   }
// }
