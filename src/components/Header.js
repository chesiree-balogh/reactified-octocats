import React from 'react'
import githubMark from '../images/GitHub-Mark-120px-plus.png'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="leftNav">
          <img
            className="logo"
            src={githubMark}
            alt="Github Logo"
            height="32"
            width="32"
            margin="8"
          />
          <li className="octodex">Octodex</li>
          <li className="home">Home</li>
          <li className="faq">FAQ</li>
        </ul>

        <ul className="rightNav">
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
//           <ul className="leftNav">
//             <img
//               className="logo"
//               src={githubMark}
//               alt="image"
//               height="32"
//               width="32"
//               margin="8"
//             />
//             <li className="octodex">Octodex</li>
//             <li className="home">Home</li>
//             <li className="faq">FAQ</li>
//           </ul>

//           <ul className="rightNav">
//             <li>Follow us on Twitter</li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }
