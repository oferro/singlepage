import React, { Component } from 'react';
import './App.css';
import WariersList from '../components/WariersList';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor () {
    super()
    this.state = {
      wariers: [
        {
          name: 'SkyWalker',
          birth_date: 1985,
          gender: "Male"
        }
      ]
      // srechfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/people/')
    .then(Response => Response.json())
    .then(resp => resp.results)
    .then(resp1 => this.setState({wariers: resp1}))
  }


  // onSerchChange = (event) => {
  //   this.state({srechfield: event.target.value})
  // }

 


  render() {
    const {wariers} = this.state;
    // const filterdWariers = wariers.filter(warier => {
    //   return warier.name.toLowerCase().includs(srechfield.toLowerCase());
    // });
    return (
      !wariers.length ? 
      <h1>... Loading ...</h1>
      :
      <div>
        <div className="App">
          <header className="App-header">
            <h1>Single Page App - 
            <a
              className="App-link"
              href="https://swapi.py4e.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWAPI
            </a>
            </h1>
          </header>
        </div>
        <Scroll>
          <WariersList wariers={wariers}/>
        </Scroll>
        
      </div>
 
    )
  }
}

export default App;
