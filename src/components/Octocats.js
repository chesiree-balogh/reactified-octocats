import React, { useState, useEffect } from 'react'
import surftocat from '../images/oct10.png'
import Dinotocat from '../images/oct9.png'
import Filmtocat from '../images/oct8.png'
import Jetpacktocat from '../images/oct6.png'

import { Octocat } from './Octocat'

export const Octocats = () => {
  // state = {
  //    data: [],
  // }
  const [arrayOfOctocats, setArrayOfOctocats] = useState([])

  useEffect(
    async () => {
      // Gets called the first time our component is mounted
      console.log('Using the effect')

      const response = await fetch('https://sdg-octodex.herokuapp.com/')
      const jsonDataFromTheApi = await response.json()
      setArrayOfOctocats(jsonDataFromTheApi.data)

      // fetch('https://sdg-octodex.herokuapp.com/')
      // .then((response) => {
      //   // When the fetch is done this will happen
      //   // Turn the response into json
      //   //
      //   // But this take a second (or three) and THIS will happen
      //   // in the background
      //   return response.json()
      // })
      // .then((jsonDataFromTheAPI) => {
      //   // FINALLY, we have the JSON from the API
      //   console.log(jsonDataFromTheAPI)

      //   setArrayOfOctocats(jsonDataFromTheAPI.data)
      // })
    },
    [
      /* blank array tells useEffect not to fire again */
    ]
  )

  return (
    <section class="octocats">
      <ul>
        {arrayOfOctocats.map((octocat) => {
          return (
            <Octocat
              octocatNumber={octocat.number}
              octocatName={octocat.name}
              imageSource={octocat.image}
            />
          )
        })}
      </ul>
    </section>
  )
}

// export class Octocats extends Component {
//   // State is going to contain a key named "octocats"
//   // that will store an array of information about many octocats
//   state = {
//     data: [],
//   }

//   componentDidMount() {
//     // Called the first time the component is put on screen
//     console.log('Octocats is mounted on the page')

//     // This is where we can fetch the data
//     fetch('https://sdg-octodex.herokuapp.com/')
//       .then((response) => {
//         // When the fetch is done this will happen
//         // Turn the response into json
//         //
//         // But this take a second (or three) and THIS will happen
//         // in the background
//         return response.json()
//       })
//       .then((jsonDataFromTheAPI) => {
//         // FINALLY, we have the JSON from the API
//         console.log(jsonDataFromTheAPI)

//         this.setState(jsonDataFromTheAPI)
//       })

//     // Can't use the data here because fetch is happening in the background

//     console.log('After fetch')
//   }

//   render() {
//     return (
//       <section class="octocats">
//         <ul>
//           {//loop through this.state.octocats
//           // for each object in that array, turn that into a <Octocat/>

//           // state
//           //   |
//           //   |     array inside state
//           //   |        |
//           //   |        |          each element of the array, one at a time
//           //   |        |             |
//           //   v        v             v
//           this.state.data.map((octocat) => {
//             // Inside here `octocat` is something like
//             //
//             //    {
//             //      //details about the first cat
//             //      image: surftocat,
//             //      number: '140',
//             //      name: 'Surftocat',
//             //    },

//             // So... lets make a new <Octocat/> component
//             //       but feed it the needed `props`
//             //
//             //       We get those values from our `octocat`
//             //       which comes from our array
//             return (
//               <Octocat
//                 octocatNumber={octocat.number}
//                 octocatName={octocat.name}
//                 imageSource={octocat.image}
//               />
//             )
//           })}
//         </ul>
//       </section>
//     )
//   }
// }
