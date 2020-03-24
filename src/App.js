import React, { Component } from 'react'

import { Header } from './components/Header'
import { Octocats } from './components/Octocats'

// class App extends Component {
//   render() {
//     return (
//       <main>
//         <Header />
//         <Octocats />
//       </main>
//     )
//   }
// }

const App = () => {
  return (
    <main>
      <Header />
      <Octocats />
    </main>
  )
}

export default App
