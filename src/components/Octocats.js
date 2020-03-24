import React, { useState, useEffect } from 'react'

import { Octocat } from './Octocat'

export const Octocats = () => {
  // state = {
  //    data: [],
  // }
  const [arrayOfOctocats, setArrayOfOctocats] = useState([])

  const fetchData = async () => {
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
  }

  useEffect(
    () => {
      // Moved all the fetching to a function
      // This is because `useEffect` doesn't like
      // being made `async` -- but is ok with us
      // CALLING a function that is async.
      //
      // Plus it is slightly better practice to
      // have the fetching happen in a function
      // dedicated to that.
      fetchData()
    },
    [
      /* blank array tells useEffect not to fire again */
    ]
  )

  return (
    <section className="octocats">
      <ul>
        {arrayOfOctocats.map((octocat) => {
          return (
            <Octocat
              // Every react component used inside a `map` has to have
              // a unique key. This is so react can keep track of them
              // when updating the page. Since every octocat has a unique
              // `number` we will just use that as our key! Handy!
              key={octocat.number}
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
//       <section className="octocats">
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
