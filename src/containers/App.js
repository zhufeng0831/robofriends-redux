import React, { Component } from 'react';
import { connect } from 'react-redux' //connect react and redux 
import logo from '../logo.svg';
import './App.css';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import { robots } from '../robots'
import Scroll from '../components/Scroll'
import { setSearchField, requestRobots } from '../actions'
//div to wrap the return part
//component lifecycle methods

//从reducer获得state,例如reducer.searchRobots.searchField
//tells what state to listen to and send us props 
//return an object
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,  //from which reducer, return an object
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//action returns an object, in order to trigger an action, actions need to get dispatched 
//dispatch is a function
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

//mapStateToProps 和mapDispatchToProps里的内容组成props
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
      })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>  
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header"> //
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
 
export default connect(mapStateToProps, mapDispatchToProps)(App);



