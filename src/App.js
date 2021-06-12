import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component{
  constructor(){
  super();
  this.state={
    monsters:[
    
    ],
    searchField:''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data=> data.json())
  .then(users=> this.setState({monsters:users}));//Don'tmutate state directly Use setState()
}

handleChange=(e)=>{
    this.setState({searchField:e.target.value});
}

  render(){//whenever state is changed render() is called again;
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <h1>Monster Hunters</h1>
      <SearchBox placeholder='Search Monster'
      handleChange={this.handleChange}//Casing is Important
      >

      </SearchBox>
      <CardList monsters={filteredMonsters}>
      
      </CardList>
    </div>
    );
  }
}

export default App;
