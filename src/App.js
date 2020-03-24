import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <nav>
            <ul class="leftNav">
              <img
                class="logo"
                src="./images/GitHub-Mark-120px-plus.png"
                alt="image"
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

        <section class="octocats">
          <ul>
            <li>
              <setion>
                {' '}
                <img src="./images/oct10.png" />
              </setion>
              <section>
                <p class="black">#140:</p>
                <p class="bold">Surftocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct9.png" />
              </section>
              <section>
                <p class="black">#130:</p>
                <p class="bold">Dinotocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct8.png" />
              </section>
              <section>
                <p class="black">#122:</p>
                <p class="bold">Filmtocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct6.png" />
              </section>
              <section>
                <p class="black">#118:</p>
                <p class="bold">Jetpacktocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct11.png" />
              </section>
              <section>
                <p class="black">#117:</p>
                <p class="bold">Minertocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct5.png" />
              </section>
              <section>
                <p class="black">#116:</p>
                <p class="bold">Mountietocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct4.gif" />
              </section>
              <section>
                <p class="black">#110:</p>
                <p class="bold">Grinchtocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct3.png" />
              </section>
              <section>
                <p class="black">#108</p>
                <p class="bold">Yaktocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct7.png" />
              </section>
              <section>
                <p class="black">#105:</p>
                <p class="bold">Labtocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct2.png" />
              </section>
              <section>
                <p class="black">#88:</p>
                <p class="bold">Spidertocat</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct1.png" />
              </section>
              <section>
                <p class="black">#78:</p>
                <p class="bold">Octofez</p>
              </section>
            </li>
            <li>
              <section>
                <img src="./images/oct12.jpg" />
              </section>
              <section>
                <p class="black">#55:</p>
                <p class="bold">Octocat De Los Muertos</p>
              </section>
            </li>
          </ul>
        </section>
      </main>
    )
  }
}
export default App
