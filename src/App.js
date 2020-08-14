import React , { Component } from 'react';
import './App.css';
import {Cardlist} from './Component/Card-List/card-listcompo';
import {SearchBox} from './Component/search-box/search-box.component';
class App extends Component{

  constructor(){
    super();
    this.state  = {
      monsters:[],
      searchfield:""
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
        .then(users =>this.setState({ monsters:users}))
  }
   render(){
    const { monsters ,searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
     return(
       <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
         <SearchBox placeholder='search monsters' handleChange = { e => this.setState({searchfield : e.target.value})}/>
         <Cardlist monsters={filteredMonsters} />
       </div>
     )
   }
}
export default App;
