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

class Octocat extends Component {
  render() {
    return (
      <li>
        <setion>
          <img src={surftocat} />
        </setion>
        <section>
          <p class="black">#140:</p>
          <p class="bold">Surftocat</p>
        </section>
      </li>
    )
  }
}

export class Octocats extends Component {
  render() {
    return (
      <section class="octocats">
        <ul>
          <Octocat />

          <li>
            <section>
              <img src={Dinotocat} />
            </section>
            <section>
              <p class="black">#130:</p>
              <p class="bold">Dinotocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct8.png" />
            </section>
            <section>
              <p class="black">#122:</p>
              <p class="bold">Filmtocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct6.png" />
            </section>
            <section>
              <p class="black">#118:</p>
              <p class="bold">Jetpacktocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct11.png" />
            </section>
            <section>
              <p class="black">#117:</p>
              <p class="bold">Minertocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct5.png" />
            </section>
            <section>
              <p class="black">#116:</p>
              <p class="bold">Mountietocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct4.gif" />
            </section>
            <section>
              <p class="black">#110:</p>
              <p class="bold">Grinchtocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct3.png" />
            </section>
            <section>
              <p class="black">#108</p>
              <p class="bold">Yaktocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct7.png" />
            </section>
            <section>
              <p class="black">#105:</p>
              <p class="bold">Labtocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct2.png" />
            </section>
            <section>
              <p class="black">#88:</p>
              <p class="bold">Spidertocat</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct1.png" />
            </section>
            <section>
              <p class="black">#78:</p>
              <p class="bold">Octofez</p>
            </section>
          </li>
          <li>
            <section>
              <img src="../images/oct12.jpg" />
            </section>
            <section>
              <p class="black">#55:</p>
              <p class="bold">Octocat De Los Muertos</p>
            </section>
          </li>
        </ul>
      </section>
    )
  }
}