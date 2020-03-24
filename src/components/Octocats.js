import React, { Component } from 'react'
import surftocat from '../images/oct10.png'
import Dinotocat from '../images/oct9.png'
import Filmtocat from '../images/oct8.png'
import Jetpacktocat from '../images/oct6.png'
import Minertocat from '../images/oct11.png'
import Mountietocat from '../images/oct5.png'
import Grinchtocat from '../images/oct4.gif'
import Yaktocat from '../images/oct3.png'
import Labtocat from '../images/oct7.png'
import Spidertocat from '../images/oct2.png'
import Octofez from '../images/oct1.png'

// This component requires three props
// imageSource - What is the image to show
// octocatNumber - What is the cat number to show
// octocatName - What is the cat name to show
class Octocat extends Component {
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

export class Octocats extends Component {
  // State is going to contain a key named "octocats"
  // that will store an array of information about many octocats
  state = {
    octocats: [
      {
        //details about the first cat
        imageSource: surftocat,
        octocatNumber: '140',
        octocatName: 'Surftocat',
      },

      {
        // details about the second cat
        imageSource: Dinotocat,
        octocatNumber: '130',
        octocatName: 'Dinotocat',
      },

      {
        imageSource: Filmtocat,
        octocatNumber: '122',
        octocatName: 'Filmtocat',
      },

      {
        imageSource: Jetpacktocat,
        octocatNumber: '118',
        octocatName: 'Jetpacktocat',
      },
    ],
  }

  render() {
    return (
      <section class="octocats">
        <ul>
          {//loop through this.state.octocats
          // for each object in that array, turn that into a <Octocat/>

          // state
          //   |
          //   |     array inside state
          //   |        |
          //   |        |          each element of the array, one at a time
          //   |        |             |
          //   v        v             v
          this.state.octocats.map((octocat) => {
            // Inside here `octocat` is something like
            //
            //    {
            //      //details about the first cat
            //      imageSource: surftocat,
            //      octocatNumber: '140',
            //      octocatName: 'Surftocat',
            //    },

            // So... lets make a new <Octocat/> component
            //       but feed it the needed `props`
            //
            //       We get those values from our `octocat`
            //       which comes from our array
            return (
              <Octocat
                ocotocatNumber={octocat.octocatNumber}
                octocatName={octocat.octocatName}
                imageSource={octocat.imageSource}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}
