import React, { Component } from 'react';
import './App.css';
import WariersList from '../components/WariersList';
import Scroll from '../components/Scroll';
import SerchBox from '../components/SerchBox';
import 'tachyons';
import BasicTable from '../components/BasicTable';

class App extends Component {
  constructor () {
    super()
    this.state = {
      wariers: [
        {
          name: 'SkyWalker',
          birth_year: 1985,
          gender: "Male"
        }
      ],
      serchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/people/')
    .then(Response => Response.json())
    .then(resp => resp.results)
    .then(resp1 => this.setState({wariers: resp1}))
  }


  onSerchChange = (event) => {
    this.setState({serchfield: event.target.value});
  }

  



  render() {
    const {wariers, serchfield} = this.state;
    const filterdWariers = wariers.filter(warier => {
      return warier.name.toLowerCase().includes(serchfield.toLowerCase());
    });
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
        <div  className='flex justify-center' >
          <SerchBox serchChange={this.onSerchChange} />
        </div>
        <Scroll>
          <WariersList wariers={filterdWariers}/>
        </Scroll>
          {/* <BasicTable data={filterdWariers} /> */}
        
      </div>
 
    )
  }
}

export default App;
