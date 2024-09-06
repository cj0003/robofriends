import React, { Component } from "react";
import CardList from "../components/CardList";
// import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import { robots } from "../robots";
import ErrorBoundary from '../components/errorboundary';


// const state = {
//     robots: robots,
//     searchfield:''
// }


class App extends Component
{ constructor(){
    super()
    this.state = {
         robots: [],
        searchfield:''
    }
}

componentDidMount(){
    // console.log("check");
    // this.setState({ robots: robots});

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots:users})})
    
    
    
    
}

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
    console.log(event.target.value);
    
    console.log(event.target.value);
}

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(!robots.length

        ) {
            return <h1> Loading </h1>
        } else{
            
            return(
                <div className="tc">
                        <h1 className="f1 " >Robofriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                            
                            </ErrorBoundary>
                            
                        </Scroll>
                        
                </div>
                
            );

        }



       

    }

} 

export default App;