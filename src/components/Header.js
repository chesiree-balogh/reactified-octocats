import React from 'react'
import githubMark from '../images/GitHub-Mark-120px-plus.png'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul class="leftNav">
          <img
            class="logo"
            src={githubMark}
            alt="Github Logo"
            height="32"
            width="32"
            margin="8"
          />
          <li class="octodex">Octodex</li>
          <li class="home">Home</li>
          <li class="faq">FAQ</li>
        </ul>

        <ul class="rightNav">
          <li>Follow us on Twitter</li>
        </ul>
      </nav>
    </header>
  )
}

// export class Header extends Component {
//   render() {
//     return (
//       <header>
//         <nav>
//           <ul class="leftNav">
//             <img
//               class="logo"
//               src={githubMark}
//               alt="image"
//               height="32"
//               width="32"
//               margin="8"
//             />
//             <li class="octodex">Octodex</li>
//             <li class="home">Home</li>
//             <li class="faq">FAQ</li>
//           </ul>

//           <ul class="rightNav">
//             <li>Follow us on Twitter</li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }
